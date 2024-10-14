<template>
  <RouterLink class="item" :class="`item--${item.color}`" :to="item.to">
    <div class="name">{{ item.name }}</div>
    <div class="price">{{ item.priceFrom }}</div>
    <img class="img" :src="item.image" />
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
    position: relative;
    display: block;
    height: 180px;
    overflow: hidden;
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

  .name, .price {
    position: relative;
    z-index: 10;
  }

  .img {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 190px;
    z-index: 0;
    right: -24px;

    @include xl {
      right: 0;
    }
  }
</style>
