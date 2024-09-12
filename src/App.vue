<template>
  <Suspense>
    <router-view />
  </Suspense>
</template>

<script setup>
  import { useBasketStore } from './shared/store/basket';

  const { init } = useBasketStore();

  init();
</script>
