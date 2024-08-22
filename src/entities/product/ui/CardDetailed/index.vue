<template>
  <AppModal v-model="value" x-pos="right" y-pos="top" animation="slide-right">
    <div class="card">
      <ContentSlider
        :description="'123'"
        :energy="{
          belki: '1',
          giri: '2',
          uglevodi: '3',
        }"
      />
    </div>
  </AppModal>
</template>

<script setup lang="ts">
  import ContentSlider from './ContentSlider.vue';

  const value = defineModel({
    default: false,
  });
</script>

<style scoped lang="scss">
  .card {
    @apply tw-rounded-1.5xl tw-bg-white tw-p-16 tw-w-full tw-h-full;
  }
</style>
