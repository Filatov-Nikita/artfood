<template>
  <main class="page--py">
    <div class="wrapper">
      <InnerSection />
      <HallList :halls="halls" />
    </div>
  </main>
</template>

<script setup lang="ts">
  import InnerSection from './InnerSection/index.vue';
  import { HallList } from '@/entities/hall';
  import { useRepositories } from '@/shared/repositories';
  import useRequest from '@/shared/lib/useRequest';
  import useDataOrFail from '@/shared/lib/useDataOrFail';

  const api = useRepositories();
  const halls = useDataOrFail(await useRequest(api.halls.all));
</script>
