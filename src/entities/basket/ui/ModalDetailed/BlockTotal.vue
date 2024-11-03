<template>
  <div class="block">
    <div class="row count">
      <AppPlural :total="basket.length" :cases="cases" />
      <span class="sum">{{ $amount(sum) }}</span>
    </div>
    <div class="row total">
      <span>
        Итого
      </span>
      <span class="sum">{{ $amount(sum) }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { BasketItem } from '@/shared/repositories/basket';
  import { computed } from 'vue';

  const props = defineProps<{
    basket: BasketItem[],
  }>();

  const sum = computed(() => {
    return props.basket.reduce((acc, item) => {
      acc += +item.count * +item.price;
      return acc;
    }, 0);
  });

  const cases: [ string, string, string ] = [ 'товар', 'товара', 'товаров' ];
</script>

<style scoped lang="scss">
  .total {
    @apply tw-text-body-m-bold -tw-tracking-2;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 16px;
  }

  .sum {
    text-align: right;
    flex-grow: 1;
  }

  .count {
    @apply tw-mb-4 tw-text-body-s-medium tw-text-text01;

    & > span {
      &:first-child {
        flex-grow: 1;
      }
    }
  }

  .block {
    @apply tw-pt-16;
  }
</style>
