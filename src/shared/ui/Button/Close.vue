<template>
  <button class="close-btn">
    <AppIcon name="x-regular" fit />
  </button>
</template>

<script setup lang="ts">
  withDefaults(
    defineProps<{
      size: string,
      padding?: string,
    }>(),
    {
      padding: '0.2em',
    },
  )
</script>

<style scoped lang="scss">
  .close-btn {
    font-size: v-bind(size);
    width: 1em;
    height: 1em;
    padding: v-bind(padding);
    @apply tw-bg-neutral tw-rounded-full;

    @include lg {
      &:hover {
        @apply tw-bg-neutral-hover;
      }

      &:active {
        @apply tw-bg-neutral-press;
      }
    }
  }
</style>
