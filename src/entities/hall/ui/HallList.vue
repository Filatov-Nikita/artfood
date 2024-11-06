<template>
  <div>
    <HallListItem
      v-for="hall in halls"
      :key="hall.id"
      :hall="hall"
    />
  </div>
</template>

<script setup lang="ts">
  import HallListItem from './HallListItem.vue';
  import type { Hall } from '@/shared/repositories/halls';

  defineProps<{
    halls: Hall[],
  }>();
</script>
