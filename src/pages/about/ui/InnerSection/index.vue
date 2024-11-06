<template>
  <div class="inner-section about">
    <div class="title">
      <h1 class="h1">О компании</h1>
      <div v-if="grid.breakpoint === 'lg'" class="tw-mt-16">
        <p class="text">Ресторан доставки здоровой еды</p>
        <p class="text2" v-html="text"></p>
      </div>
    </div>
    <div class="img-wrap">
      <img width="960" height="456" src="./image.png" />
     </div>
     <div v-if="grid.breakpoint !== 'lg'" class="content">
      <p class="text">Ресторан доставки здоровой еды</p>
      <p class="text2" v-html="text"></p>
     </div>
  </div>
</template>

<script setup lang="ts">
  import { useAppGrid } from '@/shared/lib/useScreen';

  const grid = useAppGrid();

  const text = 'Доставка вкусных и&nbsp;здоровых обедов в&nbsp;течение дня в офис и на дом';
</script>

<style scoped lang="scss">
  .about {
    @include lg {
      display: grid;
      grid-template-columns: 340px 360px;
      grid-template-areas: "a b";
      column-gap: 70px;
      align-items: center;
      @apply tw-mb-24;
    }

    @include xl {
      grid-template-columns: auto 480px 400px;
      column-gap: 70px;
      grid-template-areas: "a b c";
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
    @apply tw-text-body-l-bold -tw-tracking-2;

    @include xl {
      max-width: 234px;
    }
  }

  .text2 {
    @apply tw-text-body-m-medium tw-mt-12;

    @include xl {
      max-width: 310px;
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
