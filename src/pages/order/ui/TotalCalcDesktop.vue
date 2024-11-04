<template>
  <div class="total-calc">
    <div class="sum line">
      <span>Итого</span>
      <span>{{ $amount(basketStore.total) }}</span>
    </div>
    <div class="line">
      <AppPlural class="label" :total="basketStore.basket.length" :cases="cases" />
      <span class="value">{{ $amount(basketStore.total) }}</span>
    </div>
    <div class="actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useBasketStore } from '@/shared/store/basket';

  const basketStore = useBasketStore();

  const cases: [ string, string, string ] = [ 'товар', 'товара', 'товаров' ];

</script>

<style scoped lang="scss">
  .total-calc {
    @apply tw-p-16 tw-bg-neutral tw-rounded-xl;
  }

  .actions {
    @apply tw-border-t tw-border-solid tw-border-border01 tw-mt-16;
  }

  .sum {
    @apply tw-text-body-l-bold -tw-tracking-2 tw-mb-16;
  }

  .label {
    @apply tw-text-body-s-medium tw-text-text01;
  }

  .value {
    @apply tw-text-body-s-medium;
  }

  .line {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 16px;
  }
</style>
