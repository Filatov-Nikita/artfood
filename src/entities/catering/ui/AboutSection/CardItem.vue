<template>
  <div class="item">
    <p class="title" :class="{ 'title--pr': !!item.img }">{{ item.title }}</p>
    <p class="text">{{ item.text }}</p>
    <img v-if="item.img" class="img" :src="item.img" loading="lazy" />
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    item: {
      title: string,
      text: string,
      img?: string,
    }
  }>();
</script>

<style scoped lang="scss">
  .item {
    @apply tw-bg-neutral tw-rounded-1.5xl tw-p-24 tw-relative;

    @include lg {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  .title {
    @apply tw-text-body-l-bold -tw-tracking-2 tw-mb-32;

    &--pr {
      padding-right: 80px;
      min-height: 50px;
    }
  }

  .text {
    @apply tw-text-body-m-medium;
  }

  .img {
    width: 72px;
    height: 72px;
    object-fit: contain;
    position: absolute;
    top: 16px;
    right: 16px;
  }
</style>
