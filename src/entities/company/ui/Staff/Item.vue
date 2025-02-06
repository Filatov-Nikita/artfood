<template>
  <article class="item">
    <div class="img-wrap">
      <AppImg class="photo" :width="item.img.WIDTH" :height="item.img.HEIGHT" :src="item.img.SRC" loading="lazy" />
    </div>
    <div class="text-wrap">
      <p class="name">{{ item.fio }}</p>
      <p class="text" v-html="item.vacancy"></p>
    </div>
  </article>
</template>

<script setup lang="ts">
  import type { CompanyTeamItem } from '@/shared/repositories/company';

  defineProps<{
    item: CompanyTeamItem,
  }>();
</script>

<style scoped lang="scss">
  .img-wrap {
    height: 360px;
    @apply tw-rounded-1.5xl tw-overflow-hidden tw-mb-16;

    @include xl {
      height: 450px;
    }
  }

  .photo {
    @apply tw-w-full tw-h-full tw-object-cover;
  }

  .name {
    @apply tw-text-body-l-bold -tw-tracking-2 tw-mb-8;
  }

  .text {
    @apply tw-text-body-m-medium tw-text-text01;
  }
</style>
