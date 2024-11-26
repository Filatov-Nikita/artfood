<template>
  <div>
    <h1 class="h1 title">{{ activeSection.name }}</h1>
    <div class="scroll-x tabs">
      <TabItem
        v-if="showedSection[0].dirs.length > 0"
        key="all"
        :active="activeSubsection === null"
        @click="activeSubsection = null"
      >
        Все
      </TabItem>
      <TabItem
        v-for="dir in showedSection[0].dirs"
        :key="dir.id"
        :active="activeSubsection ? activeSubsection.id === dir.id : false"
        @click="activeSubsection = dir"
      >
        {{ dir.name }}
      </TabItem>
    </div>
    <MenuList
      :elements="elements"
    />
  </div>
</template>

<script setup lang="ts">
  import MenuList from './MenuList.vue';
  import useDataOrAlert from '@/shared/lib/useDataOrAlert';
  import useDataOrFail from '@/shared/lib/useDataOrFail';
  import useRequest from '@/shared/lib/useRequest';
  import { useRepositories } from '@/shared/repositories';
  import type { Section, Dir, Element } from '@/shared/repositories/banquet';
  import { ref, watch } from 'vue';

  const props = defineProps<{
    activeSection: Section,
  }>();

  const api = useRepositories();

  const sectionRes = await useRequest(() => api.banquet.showSection(props.activeSection.id), {
    watch: [
      () => props.activeSection.id,
    ],
  });

  const showedSection = useDataOrFail(sectionRes);

  const activeSubsection = ref<Dir | null>(null);

  const elements = ref<Element[]>(showedSection.value[0].elements);

  const elRes = await useRequest(
    () => api.banquet.subsectionElements(activeSubsection.value!.id),
    { immediate: false }
  );
  const { send } = useDataOrAlert(elRes);

  watch(showedSection, (section) => {
    elements.value = section[0].elements;
    activeSubsection.value = null;
  });

  watch(activeSubsection, async (subsection) => {
    if(subsection) {
      const res = await send();
      if(res) elements.value = res.data[0].elements;
    } else {
      elements.value = showedSection.value[0].elements;
    }
  });
</script>


<style scoped lang="scss">
  .title {
    @apply tw-mb-16;
  }

  .tabs {
    display: flex;
    gap: 8px;
    @apply tw-mb-16;
  }
</style>
