<template>
  <div class="inner-section halls">
    <div class="title">
      <h1 class="h1">Банкетные залы</h1>
      <div v-if="grid.breakpoint === 'lg'" class="tw-mt-16">
        <p class="text">Банкетные залы для вашего торжества</p>
        <p class="tw-text-body-m-medium tw-mt-8">вместимостью от 30 до 150 персон</p>
      </div>
    </div>
    <div class="img-wrap">
      <img width="637" height="456" src="./image.png" />
     </div>
     <div v-if="grid.breakpoint !== 'lg'" class="content">
      <p class="text">Банкетные залы для вашего торжества</p>
      <p class="text2">вместимостью от 30 до 150 персон</p>
     </div>
  </div>
</template>

<script setup lang="ts">
  import { useAppGrid } from '@/shared/lib/useScreen';

  const grid = useAppGrid();
</script>

<style scoped lang="scss">
  .halls {
    @include lg {
      display: grid;
      grid-template-columns: 408px 260px;
      grid-template-areas: "a b";
      column-gap: 80px;
      align-items: center;
    }

    @include xl {
      grid-template-columns: 280px 320px 408px;
      grid-template-areas: "a b c";
      margin-bottom: 16px;
    }
  }

  .title {
    @include lg {
      grid-area: a;
    }

    @include xl {
      align-self: center;
    }
  }

  .content {
    @apply tw-mt-24;

    @include lg {
      grid-area: c;
      @apply tw-mt-0;
    }
  }

  .text {
    @apply tw-text-body-m-bold -tw-tracking-2;

    @include lg {
      @apply tw-text-heading-3-bold;
    }
  }

  .text2 {
    @apply tw-text-body-s-medium tw-mt-8;

    @include lg {
      @apply tw-text-body-m-medium;
    }
  }

  .img-wrap {
    max-width: 340px;
    @apply tw-mt-24;

    @include lg {
      grid-area: b;
      max-width: 100%;
      @apply tw-mt-0;
    }
  }
</style>
