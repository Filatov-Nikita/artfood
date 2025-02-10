<template>
  <section class="hall-gallery">
    <h2 class="title">Галерея <span class="tw-text-orange">наших мероприятий</span></h2>
    <Swiper
      class="slider"
      :modules="[ Navigation ]"
      :navigation="{
        prevEl: '.nav-btn-swiper--prev',
        nextEl: '.nav-btn-swiper--next',
        disabledClass: 'nav-btn-swiper--disabled',
      }"
      :spaceBetween="16"
      :watchOverflow="true"
    >
      <SwiperSlide
        v-for="img in images"
      >
        <AppImg class="photo" :baseUrl="baseUrl" :src="img" />
      </SwiperSlide>
      <template #container-end>
        <ButtonNav class="gall-nav" ref="prev" type="prev" swiper />
        <ButtonNav class="gall-nav" ref="next" type="next" swiper />
      </template>
    </Swiper>
  </section>
</template>

<script setup lang="ts">
  import { Navigation } from 'swiper/modules';

  defineProps<{
    images: string[],
    baseUrl?: string
  }>();
</script>

<style scoped lang="scss">
  .hall-gallery {
    @apply tw-pt-40;
  }

  .photo {
    @apply tw-w-full tw-rounded-1.5xl;
  }

  .title {
    @apply tw-mb-24;

    @include lg {
      @apply tw-mb-32;
    }
  }

  .gall-nav {
    display: block !important;
  }
</style>
