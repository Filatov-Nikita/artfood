<template>
  <div class="nav-item">
    <router-link class="nav-item__link" :to="to">
      {{ label }}
    </router-link>
  </div>
</template>

<script setup lang="ts">
  import { RouteLocationRaw } from 'vue-router';

  defineProps<{
    label: string,
    to: RouteLocationRaw,
  }>();
</script>

<style scoped lang="scss">
  .nav-item {
    &__link {
      @apply tw-text-body-m-bold tw-text-white;
    }
  }
</style>
