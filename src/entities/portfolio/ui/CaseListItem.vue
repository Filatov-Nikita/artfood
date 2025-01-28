<template>
  <div class="case">
    <div class="photo-col">
      <PhotoGallery class="gallery" :images="item.img" />
    </div>
    <div class="text-col">
      <div class="loc-wrap">
        <Badge leftIcon="map-pin-bold" design="neutral" >{{ item.name }}</Badge>
      </div>
      <p class="text">
        {{ item.text }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { PhotoGallery } from '@/shared/ui';
  import type { PortfolioElement } from '@/shared/repositories/portfolio';
  import { Badge } from '@/shared/ui';

  defineProps<{
    item: PortfolioElement,
  }>();
</script>

<style scoped lang="scss">
  .case {
    @apply tw-border-b tw-border-solid tw-border-border01 tw-py-24;

    @include lg {
      display: grid;
      column-gap: 80px;
      grid-template-columns: 478px minmax(0, 1fr);
      align-items: center;
      @apply tw-py-32;
    }

    @include xl {
      grid-template-columns: 555px minmax(0, 1fr);
    }

    &:last-child {
      @include lg {
        border: 0;
      }
    }
  }

  .text {
    @apply tw-text-body-m-medium;
  }

  .loc-wrap {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    align-items: center;
    @apply tw-mb-16;

    @include lg {
      @apply tw-mb-24;
    }
  }

  .gallery {
    height: 190px;
    @apply tw-mb-16;

    @include lg {
      height: 265px;
      @apply tw-mb-0;
    }

    @include xl {
      height: 300px;
    }
  }
</style>
