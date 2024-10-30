<template>
  <div class="prog-list">
    <ProgramListItem
      class="prog-item"
      v-for="item in items"
      :key="item.id"
      :item="item"
      @click="$emit('change:program', item)"
    />
  </div>
</template>

<script setup lang="ts">
  import ProgramListItem from './ProgramListItem.vue';
  import type { ProgramsElement } from '@/shared/repositories/programs';

  defineProps<{
    items: ProgramsElement[],
  }>();

  const emit = defineEmits<{
    (event: 'change:program', program: ProgramsElement): void,
  }>();
</script>

<style scoped lang="scss">
  .prog-list {
    display: flex;
    flex-wrap: wrap;
    margin: -20px -10px;
  }

  .prog-item {
    margin: 20px 10px;
    width: calc(100% - 20px);
  }
</style>
