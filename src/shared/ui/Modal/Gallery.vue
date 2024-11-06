<template>
  <AppModal v-model="value">
    <div class="card">
      <Swiper
        class="slider"
        :initial-slide="activeSlide"
        :space-between="20"
        watch-overflow
        :navigation="{
          prevEl: '.nav-btn-swiper--prev',
          nextEl: '.nav-btn-swiper--next',
          disabledClass: 'nav-btn-swiper--disabled',
        }"
        :modules="[ Navigation ]"
      >
        <SwiperSlide
          class="slide"
          v-for="image in images"
        >
          <div class="photo-wrap">
            <AppImg class="photo" :src="image" />
          </div>
        </SwiperSlide>
        <template #container-end>
          <ButtonNav :style="{ display: 'block' }" ref="prev" type="prev" swiper />
          <ButtonNav :style="{ display: 'block' }" ref="next" type="next" swiper />
        </template>
      </Swiper>
    </div>
    <template #after>
      <ButtonClose class="modal-close" size="40px" padding="0.2em" @click="value = false" />
    </template>
  </AppModal>
</template>

<script setup lang="ts">
  import { Navigation } from 'swiper/modules';

  withDefaults(
    defineProps<{
      activeSlide?: number,
      images: string[],
    }>(),
    {
      activeSlide: 0,
    }
  );

  const value = defineModel({
    default: false,
  });
</script>

<style scoped lang="scss">
  .card {
    width: 100%;
    height: 100%;
    overflow: hidden !important;
  }

  .slider {
    width: 100%;
    height: 100%;
  }

  .slide {
    width: 100%;
    height: 100%;
  }

  .photo-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .photo {
    max-width: 100%;
    max-height: 100%;
    @apply tw-rounded-1.5xl tw-object-contain;
  }

  .modal-close {
    position: absolute;
    z-index: 1000;
    top: 16px;
    right: 16px;
  }
</style>
