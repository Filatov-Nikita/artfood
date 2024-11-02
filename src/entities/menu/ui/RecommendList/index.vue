<template>
  <div class="items-list">
    <p class="title">{{ title }}</p>
    <div class="items">
      <ProductItem
        class="item"
        v-for="product in products"
        :id="product.id"
        :name="product.name"
        :image="product.img"
        :gram="product.ves"
        :badge="product.tag"
        :personsCount="product.presons_count"
        :text="product.podpis"
        :price="product.price"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import ProductItem from '../Item/index.vue';
  import type { MenuElement } from '@/shared/repositories/menu';

  defineProps<{
    title: string,
    products: MenuElement[],
  }>();
</script>

<style scoped lang="scss">
  .title {
    @apply tw-text-body-m-bold -tw-tracking-2 tw-mb-20;

    @include xl {
      @apply tw-text-body-l-bold tw-mb-20;
    }
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    margin: -8px;

    @include lg {
      margin: -10px;
    }
  }

  .item {
    margin: 8px;
    width:  calc(100% - 16px);

    @include lg {
      margin: 10px;
      width:  calc(50% - 20px);
    }
  }
</style>
