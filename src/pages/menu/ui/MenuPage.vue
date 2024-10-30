<template>
  <main class="page--pt">
    <div class="wrapper">
      <h1 class="h1 h-mb-16">Меню доставки</h1>
      <MenuNav :activeSection="activeSection" />
      <SectionListItem
        v-if="products.length > 0"
        :name="products[0].section_name"
        :products="products"
        @change:product="changeProduct"
      />
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
  import { ref } from 'vue';

  const route = useRoute();
  const activeSection = route.params.section as string;
  const api = useRepositories();
  const productsRes = await useRequest(() => api.menu.elementsAll({
    code: activeSection,
  }));
  const products = useDataOrFail(productsRes);

  const activeProduct = ref<string | null>(null);
  const showedProduct = ref<boolean>(false);

  function changeProduct(productId: string) {
    activeProduct.value = productId;
    showedProduct.value = true;
  }
</script>
