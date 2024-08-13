<template>
  <Swiper :space-between="8" :slides-per-view="1.08">
    <SwiperSlide v-for="item in menuSections">
      <Item :item="item" />
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
  import menuSections from '../../model/menuSections';
  import Item from './Item.vue';
</script>
