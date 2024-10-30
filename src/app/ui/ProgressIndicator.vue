<template>
  <div class="progress-bar" v-if="loading">
    <div class="track"></div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{ loading: boolean }>();
</script>

<style scoped lang="scss">
  .progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    overflow: hidden;
    z-index: 9000;
    @apply tw-bg-neutral;
  }

  .track {
    height: 2px;
    animation: progress 300ms cubic-bezier(1,.01,1,.75);
    @apply tw-bg-primary;
  }

  @keyframes progress {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
</style>
