<template>
  <div>
    <div class="scroll-x scroll-x--pb-8 tw-mb-16">
      <AppTabs class="tab-items" v-model:activeIndex="currentInd" :items="[ 'Описание', 'Содержит', 'Особенности питания' ]" />
    </div>
    <Swiper
      :initialSlide="currentInd"
      :allowTouchMove="false"
      @swiper="swiper = $event"
      @slideChange="onSliderChange"
    >
      <SwiperSlide>
        <p class="title-energy">БЖУ на день</p>
        <BlockEnergy
          class="tw-mb-24"
          :energy="energy"
        />
        <div class="text tw-mb-24" v-html="item.sodergit"></div>
        <CaptionItem class="tw-mb-8" color="primary" icon="crosshair-simple-regular" title="Цель" :text="item.cel" />
        <CaptionItem class="tw-mb-8" color="orange" icon="sneaker-move-regular" title="Активность" :text="item.activity" />
        <CaptionItem icon="person-arms-spread" color="red" title="Продуктивность" :text="item.productivite" />
      </SwiperSlide>
      <SwiperSlide>
        <div class="text" v-html="item.sodergit"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="text" v-html="item.osobennosti"></div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
  import type { ProgramDetailed } from '@/shared/repositories/programs';
  import { computed, ref } from 'vue';
  import { useSwiperNav } from '@/shared/lib';
  import BlockEnergy from '@/shared/ui/Food/BlockEnergy.vue';
  import CaptionItem from './CaptionItem.vue';

  const props = defineProps<{
    item: ProgramDetailed
  }>();

  const swiper = ref<any>(null);

  const { currentInd, onSliderChange } = useSwiperNav(swiper, { sync: true });

  const energy = computed(() => {
    return {
      belki: props.item.belki,
      giri: props.item.giri,
      uglevodi: props.item.uglevodi,
    }
  });
</script>

<style scoped lang="scss">
  .tab-items :deep(.item) {
    text-wrap: nowrap;
  }

  .text {
    @apply tw-text-body-s-regular;
  }

  .title-energy {
    @apply tw-text-body-s-bold -tw-tracking-2 tw-mb-8;
  }
</style>
