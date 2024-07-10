<template>
  <div
    class="nav-item"
    :class="{
      'nav-item--primary': type === 'primary',
      'nav-item--secondary': type === 'secondary',
    }"
  >
    <router-link class="nav-item__link" active-class="nav-item__link--active" :to="to">
      {{ label }}
    </router-link>
  </div>
</template>

<script setup lang="ts">
  type ItemType = 'primary' | 'secondary';
  import { RouteLocationRaw } from 'vue-router';

  defineProps<{
    type: ItemType,
    to: RouteLocationRaw,
    label: string,
  }>();
</script>

<style scoped lang="scss">
  .nav-item {
    &--primary {
      padding: 12px 0px;
      @apply tw-text-white tw-text-body-l-bold;
    }

    &--secondary {
      padding: 8px 0px;
      @apply tw-text-white tw-text-body-s-bold;
    }

    &__link {
      &--active {
        @apply tw-text-primary-hover;
      }
    }
  }
</style>
