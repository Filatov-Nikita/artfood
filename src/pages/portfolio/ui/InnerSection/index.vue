<template>
  <div class="inner-section inner-section--mb portfolio">
    <div class="title">
      <h1 class="h1">Портфолио</h1>
      <div v-if="grid.breakpoint === 'lg'" class="tw-mt-16">
        <p class="text">Лента мероприятий</p>
        <p class="tw-text-body-m-medium tw-mt-12">{{ range }} гг.</p>
      </div>
    </div>
     <div v-if="grid.breakpoint === 'xs' || grid.breakpoint === 'xl'" class="content">
      <p class="text">Лента мероприятий</p>
      <p class="tw-text-body-m-medium tw-mt-12">{{ range }} гг.</p>
     </div>
     <div class="img-wrap">
      <img width="960" height="456" src="./image.png" />
     </div>
  </div>
</template>

<script setup lang="ts">
  import { useAppGrid } from '@/shared/lib/useScreen';
  import type { PortfolioSection } from '@/shared/repositories/portfolio';
  import { computed } from 'vue';

  const grid = useAppGrid();

  const props = defineProps<{
    sections: PortfolioSection[],
  }>();

  const range = computed<string>(() => {
    const arr = props.sections.map(s => parseInt(s.name)).sort((a, b) => a - b);
    return arr.length === 0 ? '' : arr.length === 1 ? `${arr[0]}` : `${arr[0]}-${arr[arr.length - 1]}`;
  });
</script>

<style scoped lang="scss">
  .portfolio {
    @include lg {
      display: grid;
      grid-template-columns: 340px 400px;
      grid-template-areas: "a b";
      column-gap: 20px;
      align-items: center;
    }

    @include xl {
      grid-template-columns: 250px 480px 1fr;
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
    @apply tw-mt-24;

    @include lg {
      grid-area: c;
      @apply tw-mt-0;
    }
  }

  .text {
    @apply tw-text-body-l-bold -tw-tracking-2;

    @include lg {
      @apply tw-text-heading-3-bold;
    }
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
