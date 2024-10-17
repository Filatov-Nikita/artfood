<template>
  <article class="item">
    <p class="title">{{ title }}</p>
    <p class="text">{{ text }}</p>
  </article>
</template>

<script setup lang="ts">
  defineProps<{
    title: string,
    text: string,
  }>();
</script>

<style scoped lang="scss">
  .item {
    @apply tw-rounded-1.5xl tw-p-24 tw-bg-neutral;
  }

  .title {
    @apply tw-text-heading-3-bold;
  }

  .text {
    @apply tw-text-body-m-medium tw-mt-16;
  }
</style>
