<template>
  <Swiper
    :spaceBetween="8"
    :slidesPerView="1.08"
    :breakpoints="useSwiperPoints({
      lg: {
        spaceBetween: 20,
        slidesPerView: 2.12,
      },
      xl: {
        slidesPerView: 3.1,
      }
    })"
  >
    <SwiperSlide
      v-for="item in items"
    >
      <div class="item">
        <img class="photo" :src="item.img" loading="lazy">
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
  import { useSwiperPoints } from '@/shared/lib';

  type Item = {
    img: string,
  }

  defineProps<{
    items: Item[],
  }>();
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
