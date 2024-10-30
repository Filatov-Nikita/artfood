<template>
  <main class="page--pt">
    <ProgressIndicator :loading="loading"/>
    <div class="wrapper">
      <InnerSection />
      <NavYears class="nav-y" :sections="sections" v-model:activeSection="activeSection" />
      <CaseList v-if="activeSection && elements" :activeSection="activeSection" :elements="elements" />
    </div>
  </main>
</template>

<script setup lang="ts">
  import { NavYears, CaseList } from '@/entities/portfolio';
  import InnerSection from './InnerSection/index.vue';
  import { useRepositories } from '@/shared/repositories';
  import type { PortfolioSection } from '@/shared/repositories/portfolio';
  import useRequest from '@/shared/lib/useRequest';
  import useDataOrFail from '@/shared/lib/useDataOrFail';
  import useDataOrAlert from '@/shared/lib/useDataOrAlert';
  import { ref } from 'vue';
  import ProgressIndicator from '@/app/ui/ProgressIndicator.vue';

  const api = useRepositories();

  const sectionsRes = await useRequest(api.portfolio.sectionsAll);
  const sections = useDataOrFail(sectionsRes);
  const activeSection = ref<PortfolioSection | null>(sections.value[0] ?? null);
  const elementsRes = await useRequest(() => api.portfolio.elementsAll(activeSection.value!.id), {
    immediate: false,
    watch: [ activeSection ],
  });
  const { data: elements, loading } = useDataOrAlert(elementsRes);
  if(activeSection.value) {
    await elementsRes.send();
  }
</script>

<style scoped lang="scss">
  .nav-y {
    @apply tw-mb-24 tw-mt-40;
  }
</style>
