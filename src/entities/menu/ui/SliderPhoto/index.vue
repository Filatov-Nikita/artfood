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
      v-for="url in urls"
    >
      <img class="photo" :src="url" />
    </SwiperSlide>
    <template #container-end>
      <Badge class="tag" design="primary" color="green">{{ tag }}</Badge>
      <ButtonNav ref="prev" type="prev" swiper />
      <ButtonNav ref="next" type="next" swiper />
    </template>
  </Swiper>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useAppConfig } from '@/shared/config/app';
  import { Navigation, Pagination } from 'swiper/modules';
  import { Badge } from '@/shared/ui';

  const props = defineProps<{
    images: string[],
    tag: string,
  }>();

  const config = useAppConfig();

  const urls = computed(() => {
    return props.images.map(img => config.imgBase + img);
  });
</script>

<style scoped lang="scss">
  .slider {
    height: 220px;

    @include lg {
      height: 395px;
    }

    @include xl {
      height: 555px;
    }
  }

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
