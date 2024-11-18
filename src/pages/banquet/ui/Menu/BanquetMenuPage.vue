<template>
  <div>
    menu
    <pre>{{ sections }}</pre>
    <hr>
    <SectionItem v-if="activeSection" :activeSection="activeSection" />
  </div>
</template>

<script setup lang="ts">
  import useDataOrFail from '@/shared/lib/useDataOrFail';
  import useRequest from '@/shared/lib/useRequest';
  import { useRepositories } from '@/shared/repositories';
  import type { Section } from '@/shared/repositories/banquet';
  import { ref } from 'vue';
  import { SectionItem } from '@/entities/banquet';

  const api = useRepositories();

  const sectionsRes = await useRequest(api.banquet.sectionsAll);

  const sections = useDataOrFail(sectionsRes);

  const activeSection = ref<Section | null>(sections.value[0] ?? null);
</script>
