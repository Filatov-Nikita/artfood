<template>
  <main class="page--py">
    <div class="wrapper">
      <InnerSection />
      <TeamSection class="section--mb" />
      <PartnersLogo class="section--mb" />
      <StaffSection class="staff-sec" />
      <SetySection />
    </div>
  </main>
</template>

<script setup lang="ts">
  import InnerSection from './InnerSection/index.vue';
  import { TeamSection } from '@/widgets/TeamSection';
  import { PartnersLogo, StaffSection } from '@/entities/company';
  import SetySection from './SetySection.vue';
</script>

<style scoped lang="scss">
  .staff-sec {
    @apply tw-mb-40;

    @include xl {
      @apply tw-mb-64;
    }
  }
</style>
