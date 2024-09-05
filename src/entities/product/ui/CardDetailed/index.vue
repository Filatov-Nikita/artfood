<template>
  <AppModal v-model="value" x-pos="right" y-pos="top" animation="slide-right">
    <div class="card">
      <SliderPhoto class="photos" :images="product.additional_imgs" />
      <p class="title">{{ product.name }}</p>
      <p class="weight">{{ product.ves }} г</p>
      <ContentSlider
        class="card-content"
        :description="product.podpis"
        :energy="{
          belki: product.belki,
          giri: product.giri,
          uglevodi: product.uglevodi,
        }"
      />
      <RecommendList
        title="Попробуйте другие блюда"
        :products="product.reccomendations"
      />
    </div>
  </AppModal>
</template>

<script setup lang="ts">
  import ContentSlider from './ContentSlider.vue';
  import SliderPhoto from '../SliderPhoto/index.vue';
  import RecommendList from '../RecommendList/index.vue';
  import type { Detailed } from '@/entities/product/model/types/Detailed';

  defineProps<{
    product: Detailed,
  }>();

  const value = defineModel({
    default: false,
  });
</script>

<style scoped lang="scss">
  .card {
    @apply tw-rounded-1.5xl tw-bg-white tw-p-16 tw-w-full tw-h-full;
  }

  .title {
    @apply tw-text-body-l-bold -tw-tracking-2 tw-mb-4;
  }

  .weight {
    @apply tw-text-text02 tw-text-body-s-regular tw-mb-16;
  }

  .photos {
    @apply tw-mb-16;
  }

  .card-content {
    @apply tw-mb-24;
  }
</style>
