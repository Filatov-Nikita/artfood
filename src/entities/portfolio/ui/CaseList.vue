<template>
  <div>
    <p class="active-year">{{ activeSection.name }}</p>
    <div>
      <CaseListItem
        v-for="item in elements"
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
  }
</style>
