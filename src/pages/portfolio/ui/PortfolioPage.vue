<template>
  <main class="page--py">
    <ProgressIndicator :loading="loading"/>
    <div class="wrapper">
      <!-- <InnerSection /> -->
      <div class="content">
        <div class="nav-col">
          <NavYears class="nav-y" :sections="sections" v-model:activeSection="activeSection" />
        </div>
        <CaseList class="list" v-if="activeSection && elements" :activeSection="activeSection" :elements="elements" />
      </div>
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
  .nav-col {
    @apply tw-mb-24;

    @include lg {
      @apply tw-mb-0;
    }
  }

  .content {
    @include lg {
      display: grid;
      grid-template-columns: min-content minmax(0, 1fr);
      column-gap: 80px;
    }

    @include xl {
      column-gap: 200px;
    }
  }
</style>
