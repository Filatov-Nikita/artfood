<template>
  <div>
    <Item
      v-for="item in items"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script setup lang="ts">
  import type { HomeSection } from '../../model/useHomeMenu';
  import Item from './Item.vue';

  defineProps<{
    items: HomeSection[],
  }>();
</script>
