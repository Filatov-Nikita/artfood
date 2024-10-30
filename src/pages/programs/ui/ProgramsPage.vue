<template>
  <main class="page--pt">
    <div class="wrapper">
      <InnerSection />
      <AppTabs class="prog-tabs" v-model:activeIndex="activeTab" :items="tabs" />
      <ProgramList v-if="programs" :items="programs" @change:program="changeProgram" />
      <CardDetailed v-if="activeProgram" v-model="showedDetailed" />
    </div>
  </main>
</template>

<script setup lang="ts">
  import InnerSection from './InnerSection/index.vue';
  import { ProgramList } from '@/entities/programs';
  import { useList, CardDetailed, useCardModal } from '@/entities/programs';
  import { computed, ref, watch } from 'vue';

  const { activeSection, sections, programs, getSections, getPrograms } = useList();

  await getSections();
  if(activeSection.value) await getPrograms(activeSection.value.id);

  const activeTab = ref(0);
  const tabs = computed(() => sections.value.map(sec => sec.name));
  watch(activeTab, (ind) => activeSection.value = sections.value[ind]);

  const { activeProgram, showedDetailed, changeProgram } = useCardModal();
</script>

<style scoped lang="scss">
  .prog-tabs {
    @apply tw-mb-24;
  }
</style>
