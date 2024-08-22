<template>
  <button class="item" :class="{ 'item--active': active }">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
  defineProps<{
    active: boolean,
  }>();
</script>

<style scoped lang="scss">
  .item {
    padding: 12px 16px;
    border-bottom: 1px solid theme('colors.neutral');
    @apply tw-text-body-m-bold -tw-tracking-2 tw-text-text01 tw-select-none;

    &:hover {
      @apply tw-bg-neutral-hover tw-border-border00;
    }

    &:active {
      @apply tw-bg-neutral-press tw-border-neutral-press;
    }

    &--active {
      @apply tw-text-primary tw-border-primary;

      &:hover {
        @apply tw-bg-opacity-0 tw-border-primary-hover tw-text-primary-hover;
      }

      &:active {
        @apply tw-bg-opacity-0 tw-border-primary-press tw-text-primary-press;
      }
    }
  }
</style>
