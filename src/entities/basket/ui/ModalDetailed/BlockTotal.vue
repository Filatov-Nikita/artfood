<template>
  <div class="block">
    <div class="row count">
      <span>
        {{ basket.length }} товаров
      </span>
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
  import type { Item as TItem } from '@/shared/store/basket';
  import { computed } from 'vue';

  const props = defineProps<{
    basket: TItem[],
  }>();

  const sum = computed(() => {
    return props.basket.reduce((acc, item) => {
      acc += +item.count * +item.price;
      return acc;
    }, 0);
  });
</script>

<style scoped lang="scss">
  .total {
    @apply tw-text-heading-3-bold -tw-tracking-2;
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
    @apply tw-mb-8 tw-text-body-m-regular tw-text-text01;

    & > span {
      &:first-child {
        flex-grow: 1;
      }
    }
  }

  .block {
    @apply tw-pt-24;
  }
</style>
