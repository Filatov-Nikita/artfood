<template>
  <RouterLink class="item" :class="`item--${item.color}`" :to="item.to">
    <div class="name">{{ item.name }}</div>
    <div class="price">{{ item.priceFrom }}</div>
  </RouterLink>
</template>

<script setup lang="ts">
  import type { MenuItem } from '../../model/menuSections';

  defineProps<{
    item: MenuItem,
  }>();
</script>

<style scoped lang="scss">
  .item {
    display: block;
    height: 180px;
    @apply tw-rounded-1.5xl tw-p-24;

    &--red {
      @apply tw-bg-red;
    }

    &--yellow {
      @apply tw-bg-yellow;
    }

    &--orange {
      @apply tw-bg-orange;
    }
  }

  .name {
    letter-spacing: -0.02em;
    @apply tw-text-heading-3-bold;
  }

  .price {
    @apply tw-text-body-m-medium tw-mt-4;
  }
</style>
