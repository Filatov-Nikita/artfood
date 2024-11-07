<template>
  <main class="page--py">
    <div class="wrapper">
      <InnerSection />
      <TeamSection class="section--mb" />
      <PartnersLogo class="section--mb" />
      <StaffSection class="section--mb" />
    </div>
  </main>
</template>

<script setup lang="ts">
  import InnerSection from './InnerSection/index.vue';
  import { TeamSection } from '@/widgets/TeamSection';
  import { PartnersLogo, StaffSection } from '@/entities/company';
</script>
