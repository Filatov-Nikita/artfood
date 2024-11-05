<template>
  <div class="item">
    <span class="icon-wrap">
      <AppIcon class="icon" fit :name="icon" :colorClass="colorClass" />
    </span>
    <div class="text-wrap">
      <p class="title">{{ title }}:</p>
      <p class="text">{{ text }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';

  const props = defineProps<{
    icon: string,
    title: string,
    text: string,
    color: 'primary' | 'orange' | 'red',
  }>();

  const colorClass = computed(() => {
    const res = props.color === 'primary'
      ? 'tw-fill-primary'
      : props.color === 'orange'
      ? 'tw-fill-orange'
      : 'tw-fill-red';
    return res;
  });
</script>

<style scoped lang="scss">
  .item {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    @apply tw-rounded-xl tw-bg-neutral tw-p-16;
  }

  .icon-wrap {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
  }

  .text-wrap {
    flex-grow: 1;
  }

  .title {
    @apply tw-text-body-m-bold -tw-tracking-2 tw-mb-4;
  }

  .text {
    @apply tw-text-body-s-regular;
  }
</style>
