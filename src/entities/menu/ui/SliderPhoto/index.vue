<template>
  <Swiper
    class="slider"
    :spaceBetween="16"
  >
    <SwiperSlide
      v-for="url in urls"
    >
      <img class="photo" :src="url" />
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useAppConfig } from '@/shared/config/app';

  const props = defineProps<{
    images: string[],
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
</style>
