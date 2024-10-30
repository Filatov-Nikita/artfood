<template>
  <main class="page--pt">
    <ProgressIndicator :loading="loading" />
    <div class="wrapper">
      <InnerSection />
      <AppTabs class="prog-tabs" v-model:activeIndex="activeTab" :items="tabs" />
      <ProgramList v-if="elements" :items="elements" @change:program="1" />
      <!-- <CardDetailed v-if="activeProgram" v-model="showedDetailed" /> -->
    </div>
  </main>
</template>

<script setup lang="ts">
  import InnerSection from './InnerSection/index.vue';
  import { ProgramList } from '@/entities/programs';
  import { computed, ref } from 'vue';
  import { useRepositories } from '@/shared/repositories';
  import useRequest from '@/shared/lib/useRequest';
  import useDataOrFail from '@/shared/lib/useDataOrFail';
  import useDataOrAlert from '@/shared/lib/useDataOrAlert';
  import ProgressIndicator from '@/app/ui/ProgressIndicator.vue';

  const api = useRepositories();

  const sectionsRes = await useRequest(api.programs.sectionsAll);
  const sections = useDataOrFail(sectionsRes);
  const tabs = computed(() => sections.value.map(sec => sec.name));
  const activeTab = ref(0);
  const activeSection = computed(() => sections.value[activeTab.value] ?? null);
  const elementsRes = await useRequest(() => api.programs.elementsAll(activeSection.value.id), {
    immediate: false,
    watch: [ activeTab ]
  });

  const { data: elements, loading } = useDataOrAlert(elementsRes);

  if(activeSection.value) {
    await elementsRes.send();
  }
</script>

<style scoped lang="scss">
  .prog-tabs {
    @apply tw-mb-24;
  }
</style>
