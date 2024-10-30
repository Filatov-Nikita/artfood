<template>
  <AppModal v-model="value" x-pos="right" y-pos="top" animation="slide-right">
    <div class="card-wrap">
      <div class="card" v-if="product">
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
      <div v-if="loading"class="loader">
        <AppSpinner />
      </div>
    </div>
  </AppModal>
</template>

<script setup lang="ts">
  import ContentSlider from './ContentSlider.vue';
  import SliderPhoto from '../SliderPhoto/index.vue';
  import RecommendList from '../RecommendList/index.vue';
  import { useRepositories } from '@/shared/repositories';
  import useRequest from '@/shared/lib/useRequest';
  import useDataOrAlert from '@/shared/lib/useDataOrAlert';
  import { computed, watch } from 'vue';

  const props = defineProps<{
    productId: string,
  }>();

  const value = defineModel({
    default: false,
  });

  const api = useRepositories();

  const res = await useRequest(() => api.menu.show(props.productId), {
    immediate: false,
  });

  const { data, loading } = useDataOrAlert(res);

  const product = computed(() => {
    return data.value?.[0] ?? null;
  });

  watch(value, (v) => {
    if(v) {
      res.send();
    }
  }, { immediate: true });
</script>

<style scoped lang="scss">
  .card-wrap {
    position: relative;
    @apply tw-w-full tw-h-full tw-rounded-1.5xl tw-bg-white;
  }

  .card {
    overflow: auto;
    @apply tw-rounded-1.5xl tw-p-16 tw-w-full tw-h-full;
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

  .loader {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 9000;
    background: rgba(255, 255, 255, 0.7);
  }
</style>
