<template>
  <div class="alert" :class="[ `alert--${item.type}` ]">
    <div v-if="item.icon" class="icon-wrap">
      <AppIcon :name="item.icon" fit />
    </div>
    <div class="body">
      <p class="title" v-if="item.title">{{ item.title }}</p>
      <p class="text" v-if="item.text">{{ item.text }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Item } from  '../../store/alerts';

  defineProps<{
    item: Item,
  }>();
</script>

<style scoped lang="scss">
  .alert {
    pointer-events: all;
    width: 100%;
    max-width: 400px;
    padding: 12px;
    display: flex;
    align-items: flex-start;
    gap: 12px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.08), -2px 9px 10px 0 rgba(0, 0, 0, 0.07), -4px 21px 13px 0 rgba(0, 0, 0, 0.03), -7px 37px 15px 0 rgba(0, 0, 0, 0.01), -12px 58px 17px 0 rgba(0, 0, 0, 0);
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    @apply tw-bg-neutral-primary tw-text-white;

    &::after {
      content: '';
      width: 80%;
      height: 3px;
      position: absolute;
      bottom: 0;
      left: 0;
    }

    &--success {
      .icon-wrap {
        @apply tw-bg-primary;
      }

      &::after {
        @apply tw-bg-primary;
      }
    }

    &--error {
      .icon-wrap {
        @apply tw-bg-red;
      }

      &::after {
        @apply tw-bg-red;
      }
    }
  }

  .icon-wrap {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    border-radius: 50%;
    padding: 4px;
  }

  .body {
    flex-grow: 1;
  }

  .title {
    @apply tw-text-body-s-bold;
  }

  .text {
    @apply tw-text-text02 tw-mt-4 tw-text-body-xs-regular;
  }
</style>
