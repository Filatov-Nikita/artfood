<template>
  <Swiper
    :spaceBetween="8"
    :slidesPerView="1.08"
    watch-overflow
    :navigation="{
      prevEl: '.nav-btn-swiper--prev',
      nextEl: '.nav-btn-swiper--next',
      disabledClass: 'nav-btn-swiper--disabled',
    }"
    :modules="[ Navigation ]"
    :breakpoints="useSwiperPoints({
      lg: {
        spaceBetween: 20,
        slidesPerView: 2.2,
      },
      xl: {
        slidesPerView: 3.2,
        spaceBetween: 20,
      }
    })"
  >
    <SwiperSlide
      v-for="item in items"
    >
      <div class="item">
        <AppImg class="photo" :width="item.img.WIDTH" :height="item.img.HEIGHT" :src="item.img.SRC" loading="lazy" />
      </div>
    </SwiperSlide>
    <template #container-end>
      <ButtonNav ref="prev" type="prev" swiper />
      <ButtonNav ref="next" type="next" swiper />
    </template>
  </Swiper>
</template>

<script setup lang="ts">
  import { Navigation } from 'swiper/modules';
  import { useSwiperPoints } from '@/shared/lib';
  import useDataOrAlert from '@/shared/lib/useDataOrAlert';
  import useRequest from '@/shared/lib/useRequest';
  import { useRepositories } from '@/shared/repositories';

  const api = useRepositories();

  const res = await useRequest(api.company.gallery);

  const { data: items } = useDataOrAlert(res);
</script>

<style scoped lang="scss">
  .item {
    height: 228px;
    overflow: hidden;
    @apply tw-rounded-1.5xl;
  }

  .photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
