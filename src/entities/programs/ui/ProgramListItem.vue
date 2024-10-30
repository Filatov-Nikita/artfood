<template>
  <Item
    :id="item.id"
    :name="item.name"
    :image="item.img"
    :text="item.text"
  />
</template>

<script setup lang="ts">
  import type { Program } from '@/entities/programs/model/useList';
  import { Item } from '@/entities/menu';

  defineProps<{
    item: Program,
  }>();
</script>
