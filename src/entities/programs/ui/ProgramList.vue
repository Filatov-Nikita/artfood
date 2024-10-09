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
  import type { Program } from '@/entities/programs/model/useList';

  defineProps<{
    items: Program[],
  }>();

  const emit = defineEmits<{
    (event: 'change:program', program: Program): void,
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
