<template>
  <div>
    <Item
      v-for="item in basket"
      :key="item.good_id"
      :item="item"
      @remove="$emit('remove', $event)"
    />
  </div>
</template>

<script setup lang="ts">
  import type { Item as TItem } from '@/shared/store/basket';
  import Item from './Item.vue';

  defineProps<{
    basket: TItem[],
  }>();

  defineEmits<{
    (event: 'remove', productId: string): void,
  }>();
</script>
