<template>
  <Swiper
    class="logo-swiper"
    :autoplay="{
      delay: 5000,
      disableOnInteraction: true,
    }"
    free-mode
    :slides-per-view="2"
    :slides-per-group="1"
    slides-per-group-auto
    :space-between="10"
    :modules="[ FreeMode, Autoplay ]"
    :breakpoints="useSwiperPoints({
      lg: {
        'slidesPerView': 4.6,
        'spaceBetween': 20,
      },
      xl: {
        'slidesPerView': 6.3,
        'spaceBetween': 20,
      }
    })"
  >
    <SwiperSlide
      class="logo-swiper__slide"
      v-for="item in data"
    >
      <AppImg class="logo-swiper__img" :width="item.img.WIDTH" :height="item.img.HEIGHT" :src="item.img.SRC" />
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
  import { FreeMode, Autoplay } from 'swiper/modules';
  import useDataOrAlert from '@/shared/lib/useDataOrAlert';
  import useRequest from '@/shared/lib/useRequest';
  import { useRepositories } from '@/shared/repositories';
  import { useSwiperPoints } from '@/shared/lib';

  const api = useRepositories();
  const res = await useRequest(api.company.partners);
  const { data } = useDataOrAlert(res);
</script>

<style scoped lang="scss">
  .logo-swiper {
    height: 80px;
    cursor: grab;

    &__slide {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &__img {
      width: auto;
    }
  }
</style>
