<template>
  <main class="page--pt">
    <div class="wrapper">
      <HallList :halls="halls" />
    </div>
  </main>
</template>

<script setup lang="ts">
  import { useData } from '@/entities/hall';
  import { HallList } from '@/entities/hall';

  const { halls, getHalls } = useData();

  await getHalls();
</script>
