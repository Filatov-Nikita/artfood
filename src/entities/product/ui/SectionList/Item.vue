<template>
  <section class="section">
    <p class="name">{{ name }}</p>
    <div class="items">
      <ProductItem
        class="item"
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :name="product.name"
        :image="product.img"
        :gram="product.ves"
        :badge="product.tag"
        :personsCount="product.presons_count"
        :text="product.podpis"
        :price="product.price"
        @show:product="$emit('change:product', product)"
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

  const emit = defineEmits<{
    (event: 'change:product', product: MenuElement): void,
  }>();
</script>

<style scoped lang="scss">
  .section {
    padding-top: 40px;
  }

  .name {
    @apply tw-text-body-l-bold tw-mb-24 -tw-tracking-2;

    @include lg {
      @apply tw-text-heading-2-bold tw-mb-32;
    }
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    margin-top: -40px;

    @include lg {
      margin-left: -20px;
    }
  }

  .item {
    width: 100%;
    margin-top: 40px;

    @include lg {
      width: calc(100% / 12 * 4 - 20px);
      margin-left: 20px;
    }
  }
</style>
