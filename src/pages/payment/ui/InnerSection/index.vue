<template>
  <div class="inner-section payment">
    <div class="title">
      <h1 class="h1">Оплата и доставка</h1>
      <p v-if="grid.breakpoint === 'lg'" class="text tw-mt-16">Доставляем по Уфе и пригороду</p>
    </div>
     <div v-if="grid.breakpoint !== 'lg'" class="content">
      <p class="text">Доставляем по Уфе и пригороду</p>
     </div>
     <div class="img-wrap">
      <img width="840" height="454" src="./image.png" />
     </div>
  </div>
</template>

<script setup lang="ts">
  import { useAppGrid } from '@/shared/lib/useScreen';

  const grid = useAppGrid();
</script>

<style scoped lang="scss">
  .payment {
    @include lg {
      display: grid;
      grid-template-columns: 408px 320px;
      grid-template-areas: "a b";
      column-gap: 20px;
      align-items: center;
    }

    @include xl {
      grid-template-columns: 320px 410px 1fr;
      grid-template-rows: auto;
      column-gap: 60px;
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
    @apply tw-mt-16;

    @include lg {
      grid-area: c;
      @apply tw-mt-0;
    }
  }

  .text {
    @apply tw-text-body-l-bold -tw-tracking-2;
  }

  .img-wrap {
    max-width: 340px;
    @apply tw-mt-16;

    @include lg {
      grid-area: b;
      max-width: 100%;
      @apply tw-mt-0;
    }
  }
</style>
