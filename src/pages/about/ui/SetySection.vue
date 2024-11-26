<template>
  <section class="sety" v-if="data">
    <h2 class="h2 title">Попробуйте наши <span class="tw-text-red">лучшие авторские сеты</span></h2>
    <div class="items">
      <CardItem
        class="item"
        v-for="item in data"
        :key="item.id"
        :item="item"
      >
        <template #action="{ count }">
          <ButtonMinMax
            class="tw-w-full"
            :price="item.price"
            :productId="item.id"
            :count="count"
            @reduce="basketStore.reduce"
            @append="basketStore.append"
          />
        </template>
      </CardItem>
    </div>
  </section>
</template>

<script setup lang="ts">
  import useDataOrAlert from '@/shared/lib/useDataOrAlert';
  import useRequest from '@/shared/lib/useRequest';
  import { useRepositories } from '@/shared/repositories';
  import { CardItem } from '@/entities/menu';
  import { ButtonMinMax } from '@/shared/ui';
  import { useBasketStore } from '@/shared/store/basket';

  const basketStore = useBasketStore();
  const api = useRepositories();
  const res = await useRequest(api.company.sets);
  const { data } = useDataOrAlert(res);
</script>

<style scoped lang="scss">
  .title {
    @apply tw-mb-24;

    @include lg {
      @apply tw-mb-32;
    }

    @include xl {
      @apply tw-mb-48;
    }
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    margin: -12px;

    @include lg {
      margin: -10px;
    }
  }

  .item {
    margin: 12px;
    width: calc(100% - 24px);

    @include lg {
      margin: 10px;
      width: calc(33.3% - 20px);
    }

    @include xl {
      width: calc(25% - 20px);
    }
  }
</style>
