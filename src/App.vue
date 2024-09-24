<template>
  <Alerts />
  <Suspense>
    <router-view />
  </Suspense>
</template>

<script setup lang="ts">
  import { useBasketStore } from './shared/store/basket';
  import Alerts from '@/shared/ui/Alerts/index.vue';

  const { init } = useBasketStore();

  init();
</script>
