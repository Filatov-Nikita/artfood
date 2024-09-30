<template>
  <div>
    <p class="active-year">{{ activeYear.name }}</p>
    <div>
      <CaseListItem
        v-for="item in cases"
        :item="item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { OneYear, Case } from '../model/useData';
  import CaseListItem from './CaseListItem.vue'

  defineProps<{
    activeYear: OneYear,
    cases: Case[],
  }>();
</script>

<style scoped lang="scss">
  .active-year {
    @apply tw-text-heading-3-bold;
  }
</style>
