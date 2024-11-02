<template>
  <div>
    <AppTabs class="tab-items" v-model:activeIndex="currentInd" :items="[ 'Описание', 'Пищевая ценность' ]" />
    <Swiper
      :initialSlide="currentInd"
      :allowTouchMove="false"
      @swiper="swiper = $event"
      @slideChange="onSliderChange"
    >
      <SwiperSlide>
        <div class="description" v-html="description"></div>
      </SwiperSlide>
      <SwiperSlide>
        <BlockEnergy :energy="energy" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useSwiperNav } from '@/shared/lib';
  import BlockEnergy, { type Energy as IEnergy } from './BlockEnergy.vue';

  defineProps<{
    description: string,
    energy: IEnergy,
  }>();

  const swiper = ref<any>(null);

  const { currentInd, onSliderChange } = useSwiperNav(swiper, { sync: true });
</script>

<style scoped lang="scss">
  .tab-items {
    @apply tw-mb-24;
  }

  .description {
    @apply tw-text-body-s-regular;
  }
</style>
