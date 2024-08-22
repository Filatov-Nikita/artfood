<template>
  <div class="tabs">
    <Item
      v-for="(item, index) in items"
      :active="index === activeIndex"
      @click="$emit('update:activeIndex', index)"
    >
      {{ item }}
    </Item>
  </div>
</template>

<script setup lang="ts">
  import Item from './Item.vue';

  defineProps<{
    items: string[],
    activeIndex: number,
  }>();

  defineEmits<{
    (event: 'update:activeIndex', index: number): void,
  }>();
</script>

<style scoped lang="scss">
  .tabs {
    display: flex;
  }
</style>
