<template>
  <div>
    <p class="active-year">{{ activeSection.name }}</p>
    <div>
      <CaseListItem
        v-for="item in elements"
        :key="item.id"
        :item="item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { PortfolioSection, PortfolioElement } from '@/shared/repositories/portfolio';
  import CaseListItem from './CaseListItem.vue'

  defineProps<{
    activeSection: PortfolioSection,
    elements: PortfolioElement[],
  }>();
</script>

<style scoped lang="scss">
  .active-year {
    @apply tw-text-heading-3-bold;

    @include lg {
      @apply tw-text-heading-2-bold;
    }
  }
</style>
