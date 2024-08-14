<template>
  <div class="inner-sec">
    <div class="first">
      <slot name="first"></slot>
    </div>
    <div class="middle">
      <img class="decor-img" :width="img.width" :height="img.height" :src="img.path" loading="lazy" />
    </div>
    <div class="last">
      <slot name="last"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    img: {
      width: number,
      height: number,
      path: string,
    }
  }>();
</script>

<style scoped lang="scss">
  .inner-sec {
    display: grid;
    grid-template-columns: 100%;
    @apply tw-bg-neutral tw-rounded-1.5xl tw-p-24;
  }
</style>
