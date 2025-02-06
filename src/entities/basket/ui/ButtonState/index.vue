<template>
  <button class="basket" :class="{ 'basket--active': hasItems }">
    <AppIcon name="shopping-cart-regular" fit />
  </button>
</template>

<script setup lang="ts">
  defineProps<{
    hasItems: boolean,
  }>();
</script>

<style scoped lang="scss">
  .basket {
    position: relative;
    width: 40px;
    height: 40px;
    @apply tw-bg-white tw-p-8 tw-rounded-full;

    &:hover {
      @apply tw-bg-neutral-hover;
    }

    &:active {
      @apply tw-bg-neutral-press;
    }

    &--active {
      &::before {
        content: '';
        width: 8px;
        height: 8px;
        position: absolute;
        top: 0;
        right: 0;
        @apply tw-rounded-full tw-bg-primary;
      }
    }
  }
</style>
