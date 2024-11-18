<template>
  <div class="tabs scroll-x scroll-x--pb-8">
    <div
      v-for="(section, index) in sections"
      :key="section.id"
    >
      <TabItem
        :class="{ 'tab-selected': index < activeIndex || index === 0 }"
        :icon="getIcon(section.code, section.id === activeSection.id)"
        design="bordered"
        :active="section.id === activeSection.id"
        @click="$emit('change:section', section)"
      >
        {{ section.name }}
      </TabItem>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Section } from '@/shared/repositories/banquet';
  import { computed } from 'vue';

  const props = defineProps<{
    sections: Section[],
    activeSection: Section,
  }>();

  defineEmits<{
    (event: 'change:section', section: Section): void,
  }>();

  const activeIndex = computed(() => props.sections.findIndex(sec => sec.id === props.activeSection.id));

  const iconsSet: Record<string, string> = {
    'zakuski': 'hamburger',
    'salats': 'bow-flood',
    'soups': 'bowl-steam',
    'hot': 'call-bell',
    'napitki': 'pint-glass',
    'deserts': 'cake',
    'others': 'plus-circle',
  };

  function getIcon(code: string, active: boolean) {
    const icon = iconsSet[code];
    if(!icon) return 'bow-flood-regular';
    return icon + (active ? '-fill' : '-regular');
  }
</script>

<style scoped lang="scss">
  .tabs {
    display: flex;
    gap: 16px;
  }

  .tab-selected {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 10px;
      height: 10px;
      @apply tw-border-2 tw-border-solid tw-border-white tw-bg-primary tw-rounded-full;
    }
  }
</style>
