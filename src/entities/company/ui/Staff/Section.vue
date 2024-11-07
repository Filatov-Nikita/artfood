<template>
  <section v-if="data">
    <h2 class="h2 title">Команда</h2>
    <StaffList :items="data" />
  </section>
</template>

<script setup lang="ts">
  import useDataOrAlert from '@/shared/lib/useDataOrAlert';
  import useRequest from '@/shared/lib/useRequest';
  import { useRepositories } from '@/shared/repositories';
  import StaffList from './List.vue';

  const api = useRepositories();

  const res = await useRequest(api.company.team);
  const { data } = useDataOrAlert(res);
</script>

<style scoped lang="scss">
  .title {
    @apply tw-mb-24;

    @include lg {
      @apply tw-mb-32;
    }

    @include xl {
      @apply tw-mb-48;
    }
  }
</style>
