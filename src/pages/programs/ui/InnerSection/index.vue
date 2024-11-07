<template>
  <div class="inner-section inner-section--mb programs">
    <div class="title-wrap">
      <Badge class="badge" color="yellow" design="primary">от 1 200 ₽ / день</Badge>
      <h1 class="h1">Комплексные<br/>программы питания</h1>
      <p v-if="grid.breakpoint === 'lg'" class="text tw-mt-16">{{ text }}</p>
    </div>
    <div class="img-wrap">
      <img width="780" height="456" src="./image.png" />
    </div>
    <div class="text-wrap" v-if="grid.breakpoint !== 'lg'">
       <p class="text">{{ text }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useAppGrid } from '@/shared/lib/useScreen';
  import { Badge } from '@/shared/ui';

  const grid = useAppGrid();

  const text = 'Наш диетолог Мария Егорова разработала специальные программы питания для мужчин и женщин, учитывая образ жизни и физическую активность. С нами вы убедитесь, что полезное питание может быть вкусным!';
</script>

<style scoped lang="scss">
  .programs {
    @include lg {
      display: grid;
      grid-template-columns: 408px 400px;
      column-gap: 32px;
      align-items: center;
    }

    @include xl {
      grid-template-columns: 360px 390px 1fr;
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
    @apply tw-text-body-m-medium;
  }

  .badge {
    position: absolute;
    top: 0;
    left: 168px;
    transform: rotate(-2deg);

    @include lg {
      left: 225px;
    }
  }
</style>
