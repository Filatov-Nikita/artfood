<template>
  <div>
    <SectionListItem
      v-for="item in items"
      :key="item.id"
      :name="item.name"
      :products="item.goods"
    />
  </div>
</template>

<script setup lang="ts">
  import type { HomeSection } from '../../model/useHomeMenu';
  import { SectionListItem } from '@/entities/product';

  defineProps<{
    items: HomeSection[],
  }>();
</script>
