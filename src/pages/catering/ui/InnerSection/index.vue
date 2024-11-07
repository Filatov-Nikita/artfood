<template>
  <div class="inner-section inner-section--mb catering">
    <div class="title-wrap">
      <Badge class="price" color="yellow" design="primary">от 2 000 ₽ / персона</Badge>
      <h1 class="h1">Кейтеринг</h1>
      <div class="tw-mt-16" v-if="grid.breakpoint === 'lg'">
        <p class="text">{{ text }}</p>
        <div class="badges">
          <Badge leftIcon="fish-simple-bold" color="yellow" design="primary">изысканное меню</Badge>
          <Badge leftIcon="fork-knife-bold" color="yellow" design="primary">безупречная сервировка</Badge>
          <Badge leftIcon="call-bell-bold" color="yellow" design="primary">обслуживание</Badge>
        </div>
      </div>
    </div>
    <div class="img-wrap">
      <img width="780" height="456" src="./image.png" />
    </div>
    <div class="text-wrap" v-if="grid.breakpoint !== 'lg'">
       <p class="text">{{ text }}</p>
       <div class="badges">
        <Badge leftIcon="fish-simple-bold" color="yellow" design="primary">изысканное меню</Badge>
        <Badge leftIcon="fork-knife-bold" color="yellow" design="primary">безупречная сервировка</Badge>
        <Badge leftIcon="call-bell-bold" color="yellow" design="primary">обслуживание</Badge>
       </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useAppGrid } from '@/shared/lib/useScreen';
  import { Badge } from '@/shared/ui';

  const grid = useAppGrid();

  const text = 'Выездной ресторан на вашем грандиозном мероприятии';
</script>

<style scoped lang="scss">
  .catering {
    @include lg {
      display: grid;
      grid-template-columns: 408px 240px;
      column-gap: 80px;
      align-items: center;
    }

    @include xl {
      grid-template-columns: 340px 235px 1fr;
    }
  }

  .title-wrap {
    position: relative;
    @apply tw-mb-16;

    @include lg {
      @apply tw-mb-0;
    }
  }

  .img-wrap {
    max-width: 320px;
    @apply tw-mb-16;

    @include lg {
      max-width: 100%;
      @apply tw-mb-0;
    }
  }

  .text {
    @apply -tw-tracking-2 tw-text-body-m-bold tw-mb-16;

    @include lg {
      @apply tw-text-body-l-bold tw-mb-24;
    }

    @include xl {
      max-width: 400px;
    }
  }

  .price {
    position: absolute;
    top: 0;
    left: 132px;
    transform: rotate(-2deg);

    @include lg {
      left: 175px;
    }
  }

  .badges {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 8px;
  }
</style>
