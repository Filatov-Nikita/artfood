<template>
  <article>
    <div class="img-wrap">
      <AppImg class="img" :src="item.img" />
    </div>
    <p class="name">{{ item.name }}</p>
    <p class="text">{{ item.text }}</p>
    <div class="price-wrap">
      <p class="price">{{ item.price }}</p>
      <p class="days"><AppPlural :cases="cases" :total="+item.days" /></p>
    </div>
  </article>
</template>

<script setup lang="ts">
  import type { ProgramsElement } from '@/shared/repositories/programs';

  defineProps<{
    item: ProgramsElement,
  }>();

  const cases: [ string, string, string ] = [ 'день', 'дня', 'дней' ];
</script>

<style scoped lang="scss">
  .img-wrap {
    width: 100%;
    height: 343px;
    overflow: hidden;
    cursor: pointer;
    @apply tw-rounded-1.5xl tw-mb-12;

    @include lg {
      height: 320px;
    }
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .name {
    @apply tw-text-body-m-medium tw-mb-4;
  }

  .text {
    @apply tw-text-body-s-regular tw-text-text01 tw-mb-12;
  }

  .price {
    @apply tw-text-body-l-bold -tw-tracking-2 tw-mb-4;
  }

  .days {
    @apply tw-text-body-xs-medium tw-text-text01;
  }
</style>
