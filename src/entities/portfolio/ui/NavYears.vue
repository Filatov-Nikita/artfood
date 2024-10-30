<template>
  <nav class="nav scroll-x">
    <button
      class="item"
      :class="{ 'item--active': activeSection?.id === year.id }"
      v-for="year in sections" @click="onClick(year)"
    >
      {{ year.name }}
    </button>
  </nav>
</template>

<script setup lang="ts">
  import type { PortfolioSection } from '@/shared/repositories/portfolio';

  defineProps<{
    sections: PortfolioSection[],
    activeSection: PortfolioSection | null,
  }>();

  const emit = defineEmits<{
    (event: 'update:activeSection', year: PortfolioSection): void,
  }>();

  function onClick(year: PortfolioSection) {
    emit('update:activeSection', year);
  }
</script>

<style scoped lang="scss">
  .nav {
    display: flex;
    gap: 8px;
    @apply tw-bg-neutral tw-p-8 tw-rounded-xl;
  }

  .item {
    @apply tw-text-body-m-bold tw-rounded-full tw-py-12 tw-px-16;

    &--active {
      @apply tw-bg-primary tw-text-white;
    }
  }
</style>
