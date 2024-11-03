<template>
  <div>
    <TransitionGroup name="slide">
      <Item
        v-for="item in basket"
        :key="item.good_id"
        :item="item"
        @remove="$emit('remove', $event)"
      />
    </TransitionGroup>
    <p v-if="basket.length === 0" class="empty">В корзине еще нет товаров</p>
  </div>
</template>

<script setup lang="ts">
  import type { BasketItem } from '@/shared/repositories/basket';
  import Item from './Item.vue';

  defineProps<{
    basket: BasketItem[],
  }>();

  defineEmits<{
    (event: 'remove', productId: string): void,
  }>();
</script>

<style scoped lang="scss">
  .slide-leave-active {
    animation: fadeOutRight;
    animation-duration: 400ms;
  }

  .empty {
    padding: 48px 0;
    @apply tw-text-text01 tw-text-body-m-medium tw-text-center;
  }
</style>
