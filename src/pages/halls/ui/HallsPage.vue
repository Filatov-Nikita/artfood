<template>
  <PrimaryLayout>
    <main class="page--pt">
      <div class="wrapper">
        <HallList :halls="halls" />
      </div>
    </main>
  </PrimaryLayout>
</template>

<script setup lang="ts">
  import { PrimaryLayout } from '@/layouts/Primary';
  import { useData } from '@/entities/hall';
  import { HallList } from '@/entities/hall';

  const { halls, getHalls } = useData();

  await getHalls();
</script>
