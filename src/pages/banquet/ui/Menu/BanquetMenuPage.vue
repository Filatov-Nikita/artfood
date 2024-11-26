<template>
  <div>
    <SectionsTabs
      v-if="activeSection"
      class="sections-tabs"
      :activeSection="activeSection"
      :sections="sections"
      @change:section="activeSection = $event"
    />
    <SectionItem v-if="activeSection" :activeSection="activeSection" />
    <AppButton class="tw-w-full tw-mt-40" design="secondary-neutral" size="56" :to="{ name: 'banquet.check' }">
      Проверить заказ
    </AppButton>
  </div>
</template>

<script setup lang="ts">
  import useDataOrFail from '@/shared/lib/useDataOrFail';
  import useRequest from '@/shared/lib/useRequest';
  import { useRepositories } from '@/shared/repositories';
  import type { Section } from '@/shared/repositories/banquet';
  import { ref } from 'vue';
  import { SectionItem, SectionsTabs } from '@/entities/banquet';

  const api = useRepositories();

  const sectionsRes = await useRequest(api.banquet.sectionsAll);

  const sections = useDataOrFail(sectionsRes);

  const activeSection = ref<Section | null>(sections.value[0] ?? null);
</script>

<style scoped lang="scss">
  .sections-tabs {
    @apply tw-mb-16;
  }
</style>
