<template>
  <div class="case">
    <div class="loc-wrap">
      <Badge leftIcon="map-pin-bold" design="primary" color="green">{{ item.name }}</Badge>
    </div>
    <p class="text">
      {{ item.text }}
    </p>
  </div>
</template>

<script setup lang="ts">
  import type { Case } from '../model/useData';
  import { Badge } from '@/shared/ui';

  defineProps<{
    item: Case,
  }>();
</script>

<style scoped lang="scss">
  .case {
    @apply tw-border-b tw-border-solid tw-border-border01 tw-py-24;
  }

  .text {
    @apply tw-text-body-m-medium;
  }

  .loc-wrap {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    align-items: center;
    @apply tw-mb-16;
  }
</style>
