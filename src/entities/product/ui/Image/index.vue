<template>
  <div class="pr-image">
    <img v-if="path" class="pr-image__img" :src="path" loading="lazy" />
    <span class="icon-wrap">
      <AppIcon name="pizza-regular" fit />
    </span>
    <Transition name="overlay">
      <div v-if="showCount" class="overlay">
        <span class="count">{{ count }}</span>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  withDefaults(
    defineProps<{
      path: string | null,
      showCount?: boolean,
      count?: number,
      tag?: string,
    }>(),
    {
      showCount: false,
      count: 0,
    }
  );
</script>

<style scoped lang="scss">
  .pr-image {
    height: 222px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    @apply tw-bg-neutral tw-rounded-1.5xl;

    &__img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 1;
    }
  }

  .icon-wrap {
    width: 48px;
    height: 48px;
    @apply tw-text-text02;
  }

  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.64);
  }

  .overlay-enter-from, .overlay-leave-to {
    opacity: 0;
  }

  .overlay-enter-active, .overlay-leave-active {
    transition: opacity 200ms;
  }

  .count {
    letter-spacing: -0.02em;
    @apply tw-text-heading-2-extrabold tw-text-white;
  }
</style>
