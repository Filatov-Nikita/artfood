<template>
  <Swiper
    class="slider"
    :modules="[ Navigation, Pagination ]"
    :navigation="{
      prevEl: '.nav-btn-swiper--prev',
      nextEl: '.nav-btn-swiper--next',
      disabledClass: 'nav-btn-swiper--disabled',
    }"
    pagination
    :spaceBetween="16"
  >
    <SwiperSlide
      v-for="img in images"
    >
      <AppImg class="photo" :src="img" />
    </SwiperSlide>
    <template #container-end>
      <Badge v-if="tag" class="tag" design="primary" color="green">{{ tag }}</Badge>
      <ButtonNav ref="prev" type="prev" swiper />
      <ButtonNav ref="next" type="next" swiper />
    </template>
  </Swiper>
</template>

<script setup lang="ts">
  import { Navigation, Pagination } from 'swiper/modules';
  import { Badge } from '@/shared/ui';

  defineProps<{
    images: string[],
    tag?: string,
  }>();
</script>

<style scoped lang="scss">
  .photo {
    @apply tw-w-full tw-h-full tw-rounded-1.5xl tw-object-cover;
  }

  .tag {
    position: absolute;
    z-index: 900;
    top: 16px;
    left: 16px;
  }
</style>
