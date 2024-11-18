<template>
  <button type="button" class="item-base" :class="[ `item-${design}`, { [ `item-${design}--active` ]: active } ]">
    <span class="icon-wrap" v-if="icon">
      <AppIcon :name="icon" fit />
    </span>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
  withDefaults(
    defineProps<{
      active?: boolean,
      design?: 'bordered' | 'flat',
      icon?: string,
    }>(),
    {
      design: 'flat',
      active: false,
    },
  );
</script>

<style scoped lang="scss">
  .item-base {
    padding: 12px 16px;
    display: flex;
    gap: 8px;
  }

  .item-flat {
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

  .item-bordered {
    @apply tw-border tw-border-solid tw-border-neutral tw-rounded-xl tw-text-text01 tw-text-body-m-bold -tw-tracking-2;

    &:hover {
      @apply tw-bg-neutral-hover tw-border-neutral-hover;
    }

    &:active {
      @apply tw-bg-neutral-press tw-border-neutral-press;
    }

    &--active {
      @apply tw-border-primary tw-bg-primary tw-text-white;

      &:hover {
        @apply tw-border-primary-hover tw-bg-primary-hover;
      }

      &:active {
        @apply tw-border-primary-press tw-bg-primary-press;
      }
    }
  }

  .icon-wrap {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
</style>
