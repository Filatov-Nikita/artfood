<template>
  <PrimaryLayout>
    <main class="page--pt">
      <div class="wrapper">
        <InnerSection />
        <NavYears class="nav-y" :years="years" v-model:activeYear="curYear" />
        <CaseList v-if="curYear" :activeYear="curYear" :cases="cases" />
      </div>
    </main>
  </PrimaryLayout>
</template>

<script setup lang="ts">
  import { PrimaryLayout } from '@/layouts/Primary';
  import { usePortfolio, NavYears, CaseList } from '@/entities/portfolio';
  import InnerSection from './InnerSection/index.vue';

  const { years, cases, curYear, getYears, getCases } = usePortfolio();

  await getYears();
  if(curYear.value) await getCases(curYear.value.id);
</script>

<style scoped lang="scss">
  .nav-y {
    @apply tw-mb-24 tw-mt-40;
  }
</style>
