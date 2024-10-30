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
  import type { MenuElement } from '@/shared/api/models/MenuElement';

  defineProps<{
    title: string,
    products: MenuElement[],
  }>();
</script>

<style scoped lang="scss">
  .title {
    @apply tw-text-body-l-bold -tw-tracking-2 tw-mb-24;
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    margin: -16px -20px;
  }

  .item {
    margin: 16px 20px;
    width:  calc(100% - 32px);
  }
</style>
