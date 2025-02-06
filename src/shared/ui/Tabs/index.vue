<template>
  <div class="tabs" :class="`tabs--${design}`">
    <Item
      class="tabs__item"
      v-for="(item, index) in items"
      :active="index === activeIndex"
      :design="design"
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
    design?: 'bordered' | 'flat',
  }>();

  defineEmits<{
    (event: 'update:activeIndex', index: number): void,
  }>();
</script>

<style scoped lang="scss">
  .tabs {
    display: flex;

    &--bordered {
      gap: 16px;
    }

    &__item {
      white-space: nowrap;
    }
  }
</style>
