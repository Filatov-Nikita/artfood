<template>
  <AppModal v-model="value" x-pos="right" y-pos="top" animation="slide-right">
    <div class="card">1</div>
  </AppModal>
</template>

<script setup lang="ts">
  const value = defineModel({
    default: false,
  });
</script>

<style scoped lang="scss">
  .card {
    @apply tw-rounded-1.5xl tw-bg-white tw-p-16 tw-w-full tw-h-full;
  }
</style>
