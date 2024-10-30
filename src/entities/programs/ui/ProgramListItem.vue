<template>
  <Item
    :id="item.id"
    :name="item.name"
    :image="item.img"
    :text="item.text"
  />
</template>

<script setup lang="ts">
  import type { ProgramsElement } from '@/shared/repositories/programs';
  import { Item } from '@/entities/menu';

  defineProps<{
    item: ProgramsElement,
  }>();
</script>
