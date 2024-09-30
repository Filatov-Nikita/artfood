<template>
  <nav class="nav scroll-x">
    <button
      class="item"
      :class="{ 'item--active': activeYear?.id === year.id }"
      v-for="year in years" @click="onClick(year)"
    >
      {{ year.name }}
    </button>
  </nav>
</template>

<script setup lang="ts">
  import type { OneYear } from '../model/useData';

  defineProps<{
    years: OneYear[],
    activeYear: OneYear | null,
  }>();

  const emit = defineEmits<{
    (event: 'update:activeYear', year: OneYear): void,
  }>();

  function onClick(year: OneYear) {
    emit('update:activeYear', year);
  }
</script>

<style scoped lang="scss">
  .nav {
    display: flex;
    gap: 8px;
    @apply tw-bg-neutral tw-p-8 tw-rounded-xl;
  }

  .item {
    @apply tw-text-body-m-bold tw-rounded-full tw-py-12 tw-px-16;

    &--active {
      @apply tw-bg-primary tw-text-white;
    }
  }
</style>
