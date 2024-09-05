<template>
  <div>
    <SectionListItem
      v-for="item in items"
      :key="item.id"
      :name="item.name"
      :products="item.goods"
      @change:product="$emit('change:product', $event)"
    />
  </div>
</template>

<script setup lang="ts">
  import type { HomeSection } from '../../model/useHomeMenu';
  import { SectionListItem } from '@/entities/product';
  import type { MenuElement } from '@/shared/api/models/MenuElement';

  defineProps<{
    items: HomeSection[],
  }>();

  defineEmits<{
    (event: 'change:product', product: MenuElement): void,
  }>();
</script>
