<template>
  <main class="page--py">
    <div class="wrapper">
      <InnerSection />
      <PartnersLogo class="section--mb" />
    </div>
  </main>
</template>

<script setup lang="ts">
  import InnerSection from './InnerSection/index.vue';
  import { TeamSection } from '@/widgets/TeamSection';
</script>
