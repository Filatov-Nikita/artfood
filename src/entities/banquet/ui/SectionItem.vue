<template>
  <div>
    <pre>
      {{ showedSection }}
    </pre>
    <hr>
    <pre>{{ elements }}</pre>
  </div>
</template>

<script setup lang="ts">
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

  watch(activeSubsection, async (subsection) => {
    if(subsection) {
      const res = await send();
      if(res) elements.value = res.data[0].elements;
    }
  });
</script>
