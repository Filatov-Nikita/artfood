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
  import { baseURL } from '@/shared/api/useHttp';

  const props = defineProps<{
    images: string[],
  }>();

  const url = new URL(baseURL);

  const urls = computed(() => {
    return props.images.map(img => url.origin + img);
  });
</script>

<style scoped lang="scss">
  .slider {
    height: 220px;
  }

  .photo {
    @apply tw-w-full tw-h-full tw-rounded-1.5xl tw-object-cover;
  }
</style>
