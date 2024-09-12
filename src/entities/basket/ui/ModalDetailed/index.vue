<template>
  <AppModal v-model="value" x-pos="right" y-pos="top" animation="slide-right">
    <div class="card">
      <p class="title">Корзина</p>
      <ProductsList :basket="basket" @remove="basketStore.remove" />
    </div>
  </AppModal>
</template>

<script setup lang="ts">
  import { useBasketStore } from '@/shared/store/basket';
  import { storeToRefs } from 'pinia';
  import ProductsList from '../ProductsList/index.vue';

  const value = defineModel({ default: false });

  const basketStore = useBasketStore();

  const { basket } = storeToRefs(basketStore);
</script>

<style scoped lang="scss">
  .card {
    @apply tw-rounded-1.5xl tw-bg-white tw-p-16 tw-pt-28 tw-w-full tw-h-full;
  }

  .title {
    @apply tw-text-body-l-bold -tw-tracking-2 tw-mb-8;
  }
</style>
