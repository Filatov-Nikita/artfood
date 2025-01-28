<template>
  <article class="item">
    <p class="title" v-html="title"></p>
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
    @apply tw-rounded-1.5xl tw-p-24 tw-bg-neutral lg:tw-relative lg:tw-p-32;
  }

  .title {
    @apply tw-text-heading-3-bold;
    @include lg {
      font-size: 32px;
      line-height: 38px;
    }
  }

  .text {
    @apply tw-text-body-m-medium tw-mt-16;
    @include lg {
      margin: 0;
      position: absolute;
      top: 32px;
      right: 32px;
      width: fit-content;
      display: flex;
      justify-content: flex-end;
      max-width: 30%;
    }
  }
</style>
