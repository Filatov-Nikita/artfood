<template>
  <div class=" -tw-ml-16 -tw-mr-16 lg:tw-mx-0">
    <Swiper
      :space-between="8"
      :slides-per-view="1.08"
      :breakpoints="useSwiperPoints({
        lg: {
          spaceBetween: 20,
          slidesPerView: 3,
        },
      })"
      class=" !tw-px-16 lg:!tw-px-0"
    >
      <SwiperSlide v-for="(item , index) in menuSections" :class="{ '': index==0, '': index==menuSections.length-1}" >
        <Item :item="item" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
  import menuSections from '../../model/menuSections';
  import Item from './Item.vue';
  import { useSwiperPoints } from '@/shared/lib';
</script>
