<template>
  <div class="minmax-mini">
    <button class="action-btn" @click="reduce">
      <AppIcon class="icon" name="minus" />
    </button>
    <span class="count">
      {{ count }}
    </span>
    <button class="action-btn" @click="basketStore.append(productId)">
      <AppIcon class="icon" name="plus" />
    </button>
  </div>
</template>

<script setup lang="ts">
  import { useBasketStore } from '@/shared/store/basket';

  const props = defineProps<{
    productId: string,
    count: number,
  }>();

  const basketStore = useBasketStore();

  function reduce() {
    if(props.count <= 1) return;
    basketStore.reduce(props.productId);
  }
</script>

<style scoped lang="scss">
  .minmax-mini {
    display: flex;
    align-items: center;
    overflow: hidden;
    @apply tw-rounded-full tw-bg-neutral;
  }

  .action-btn {
    transition: background-color 100ms;
    flex-shrink: 0;
    @apply tw-p-12 tw-pl-8;

    &:first-child {
      @apply tw-pr-8 tw-pl-12;
    }

    &:hover {
      @apply tw-bg-neutral-hover;
    }

    &:active {
      @apply tw-bg-neutral-press;
    }
  }

  .icon {
    width: 16px;
    height: 16px;
  }

  .count {
    min-width: 20px;
    @apply tw-text-body-s-bold -tw-tracking-2 tw-text-center;
  }
</style>
