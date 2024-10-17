<template>
  <div class="slide-item" :class="{ 'slide-item--bordered': bordered }">
    <button class="slide-item__head" @click="showed = !showed">
      <span class="slide-item__label">{{ label }}</span>
      <span class="slide-item__icon" :class="{ 'slide-item__icon--active': showed }">
        <AppIcon name="caret-down-regular" fit />
      </span>
    </button>
    <SlideUpDown :active="showed" :duration="300">
      <div class="slide-item__body">
        <slot></slot>
      </div>
    </SlideUpDown>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  withDefaults(
    defineProps<{
      bordered?: boolean,
      label: string,
    }>(),
    { bordered: false },
  );

  const showed = ref(false);
</script>

<style scoped lang="scss">
  .slide-item {
    &--bordered {
      @apply tw-rounded-xl tw-border tw-border-solid tw-border-border01;
    }

    &__head {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 12px;
      padding-left: 24px;
      width: 100%;
      text-align: left;
    }

    &__label {
      flex-grow: 1;
      @apply tw-text-body-m-bold -tw-tracking-2;

      @include lg {
        @apply tw-text-body-l-bold;
      }
    }

    &__body {
      padding: 0 16px 16px 24px;
      @apply tw-text-body-s-medium;
    }

    &__head:hover &__icon {
      @apply tw-bg-opacity-100;
    }

    &__icon {
      flex-shrink: 0;
      width: 40px;
      height: 40px;
      padding: 8px;
      transition: transform 300ms, background-color 300ms;
      @apply tw-rounded-full tw-text-text00 tw-bg-neutral tw-bg-opacity-0;

      &--active {
        transform: rotate(-180deg);
      }
    }
  }
</style>
