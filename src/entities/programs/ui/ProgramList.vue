<template>
  <div class="prog-list">
    <CardItem
      class="prog-item"
      v-for="item in items"
      :key="item.id"
      :item="item"
      @click="$emit('change:program', item.id)"
    />
  </div>
</template>

<script setup lang="ts">
  import CardItem from './CardItem/index.vue';
  import type { ProgramsElement } from '@/shared/repositories/programs';

  defineProps<{
    items: ProgramsElement[],
  }>();

  const emit = defineEmits<{
    (event: 'change:program', programId: string): void,
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

    @include lg {
      width: calc(33.3% - 20px);
    }

    @include xl {
      width: calc(25% - 20px);
    }
  }
</style>
