<template>
  <Swiper
    class="slider"
    :slides-per-view="1"
    :space-between="16"
    watch-overflow
    :autoplay="{
      delay: 3000,
    }"
    :navigation="{
      prevEl: '.nav-btn-swiper--prev',
      nextEl: '.nav-btn-swiper--next',
      disabledClass: 'nav-btn-swiper--disabled',
    }"
    :modules="[ Navigation, Autoplay ]"
    :breakpoints="useSwiperPoints({
      lg: {
        'spaceBetween': 20,
      }
    })"
  >
    <SwiperSlide
      class="slide"
      v-for="item in data"
      :key="item.id"
    >
      <div class="body">
        <p class="text1">{{ item.stroka1 }}</p>
        <p class="text2">{{ item.stroka2 }}</p>
        <p class="text3">{{ item.podstrochnic }}</p>
      </div>
      <picture>
        <source media="(min-width: 1024px)" :width="item.pc_img.width" :height="item.pc_img.height" :srcset="config.imgBase + item.pc_img.src">
        <AppImg class="img" :width="item.mobile_img.width" :height="item.mobile_img.height" :src="item.mobile_img.src" />
      </picture>
    </SwiperSlide>
    <template #container-end>
      <div class="actions">
        <ButtonNav type="prev" />
        <ButtonNav type="next" />
      </div>
    </template>
  </Swiper>
</template>

<script setup lang="ts">
  import { useAppConfig } from '@/shared/config/app';
  import { useSwiperPoints } from '@/shared/lib';
  import useDataOrAlert from '@/shared/lib/useDataOrAlert';
  import useRequest from '@/shared/lib/useRequest';
  import { useRepositories } from '@/shared/repositories';
  import { Navigation, Autoplay } from 'swiper/modules';

  const api = useRepositories();

  const res = await useRequest(api.banners.all);

  const { data } = useDataOrAlert(res);

  const config = useAppConfig();
</script>

<style scoped lang="scss">
  .slider {
    height: 450px;
    @apply tw-bg-neutral tw-rounded-1.5xl;

    @include lg {
      height: 480px;
    }
  }

  .slide {
    @apply tw-p-24;

    @include lg {
      @apply tw-p-32;
    }
  }

  .body {
    max-width: 240px;
    @apply tw-p-16 tw-bg-primary tw-rounded-1.5xl tw-text-white tw-text-body-l-bold -tw-tracking-2;

    @include lg {
      max-width: 375px;
      @apply tw-p-24 tw-text-heading-2-bold;
    }
  }

  .actions {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 100;
    display: flex;
    gap: 8px;
    @apply tw-p-24;

    @include lg {
      gap: 12px;
      @apply tw-p-32;
    }
  }

  .text2 {
    @apply tw-text-text00;
  }

  .text3 {
    @apply tw-text-body-s-medium tw-mt-8;

    @include lg {
      @apply tw-text-body-m-bold tw-mt-16 -tw-tracking-2;
    }
  }

  .img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    object-fit: cover;
  }
</style>
