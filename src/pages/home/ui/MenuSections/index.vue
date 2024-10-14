<template>
  <Swiper
    :space-between="8"
    :slides-per-view="1.08"
    :breakpoints="useSwiperPoints({
      lg: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
    })"
  >
    <SwiperSlide v-for="item in menuSections">
      <Item :item="item" />
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
  import menuSections from '../../model/menuSections';
  import Item from './Item.vue';
  import { useSwiperPoints } from '@/shared/lib';
</script>
