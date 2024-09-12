<template>
  <Suspense>
    <router-view />
  </Suspense>
</template>

<script setup lang="ts">
  import { useBasketStore } from './shared/store/basket';

  const { init } = useBasketStore();

  init();
</script>
