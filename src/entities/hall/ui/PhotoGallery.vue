<template>
  <Swiper
    :slides-per-view="2"
    :space-between="8"
    watch-overflow
    :navigation="{
      prevEl: '.nav-btn-swiper--prev',
      nextEl: '.nav-btn-swiper--next',
      disabledClass: 'nav-btn-swiper--disabled',
    }"
    :modules="[ Navigation ]"
    :breakpoints="useSwiperPoints({
      lg: {
        'slidesPerView': 4,
        'spaceBetween': 20,
      }
    })"
  >
    <SwiperSlide
      v-for="(img, index) in images"
    >
      <AppImg class="photo" :src="img" @click="$emit('changed:photo', index)" />
    </SwiperSlide>
    <template #container-end>
      <ButtonNav ref="prev" type="prev" swiper />
      <ButtonNav ref="next" type="next" swiper />
    </template>
  </Swiper>
</template>

<script setup lang="ts">
  import { useSwiperPoints } from '@/shared/lib';
  import { Navigation } from 'swiper/modules';

  defineProps<{
    images: string[],
  }>();

  defineEmits<{
    (event: 'changed:photo', index: number): void,
  }>();
</script>

<style scoped lang="scss">
  .photo {
    @apply tw-rounded-1.5xl tw-w-full tw-h-full tw-object-cover tw-cursor-pointer;
  }
</style>
