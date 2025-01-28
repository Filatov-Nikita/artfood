<template>
  <main class="page--py">
    <div class="wrapper">
      <h1 class="h1 h-mb-16">Меню доставки</h1>
      <div class="content-wrap ">
        <MenuNav class="navigations " :activeSection="activeSection" />
        <SectionListItem
          class="menu-sections"
          v-if="products.length > 0"
          :name="products[0].section_name"
          :products="products"
          @change:product="changeProduct"
        />
      </div>
      <CardDetailed v-if="activeProduct" v-model="showedProduct" :productId="activeProduct" />
    </div>
  </main>
</template>

<script setup lang="ts">
  import MenuNav from './MenuNav/index.vue';
  import { SectionListItem, CardDetailed } from '@/entities/menu';
  import { useRoute } from 'vue-router';
  import { useRepositories } from '@/shared/repositories';
  import useRequest from '@/shared/lib/useRequest';
  import useDataOrFail from '@/shared/lib/useDataOrFail';
  import { computed, ref } from 'vue';

  const route = useRoute();
  const cachedSection = ref('');
  const activeSection = computed(() => {
    cachedSection.value = route.params.section as string || cachedSection.value;
    return cachedSection.value
  });
  const api = useRepositories();
  const productsRes = await useRequest(
    () => api.menu.elementsAll({
      code: activeSection.value,
    }),
    { watch: [ activeSection ] }
  );
  const products = useDataOrFail(productsRes);

  const activeProduct = ref<string | null>(null);
  const showedProduct = ref<boolean>(false);

  function changeProduct(productId: string) {
    activeProduct.value = productId;
    showedProduct.value = true;
  }
</script>

<style scoped lang="scss">
  .menu-sections {
    @include lg {
      padding-top: 0px;
      flex-grow: 1;
      min-width: 0px;
      width: 100%;
    }
  }

  .content-wrap {
    @include lg {
      display: flex;
      align-items: flex-start;
      gap: 20px;
    }

    @include xl {
      gap: 48px;
    }
  }

  .navigations {
    @include lg {
      width: 100%;
      max-width: 312px;
    }

    @include xl {
      max-width: 296px;
    }
  }
</style>
