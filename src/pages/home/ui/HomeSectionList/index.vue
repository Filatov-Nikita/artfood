<template>
  <div>
    <SectionListItem
      v-for="item in items"
      :key="item.id"
      :name="item.name"
      :products="item.goods"
      :showPersonsCount="item.code === 'sety'"
      @change:product="$emit('change:product', $event)"
    />
  </div>
</template>

<script setup lang="ts">
  import type { MenuSectionMain } from '@/shared/repositories/menu';
  import { SectionListItem } from '@/entities/menu';

  defineProps<{
    items: MenuSectionMain[],
  }>();

  defineEmits<{
    (event: 'change:product', productId: string): void,
  }>();
</script>
