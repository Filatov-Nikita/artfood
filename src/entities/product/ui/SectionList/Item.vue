<template>
  <section class="section">
    <p class="name">{{ name }}</p>
    <div class="items">
      <ProductItem
        class="item"
        v-for="product in products"
        :key="product.id"
        :name="product.name"
        :image="product.img"
        :gram="product.ves"
        :badge="product.tag"
        :personsCount="product.presons_count"
        :text="product.podpis"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
  import ProductItem from '../Item/index.vue';
  import type { MenuElement } from '@/shared/api/models/MenuElement';

  defineProps<{
    name: string,
    products: MenuElement[],
  }>();
</script>

<style scoped lang="scss">
  .section {
    padding-top: 40px;
  }

  .name {
    letter-spacing: -0.02em;
    @apply tw-text-body-l-bold tw-mb-24;
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    margin-top: -40px;
  }

  .item {
    width: 100%;
    margin-top: 40px;
  }
</style>
