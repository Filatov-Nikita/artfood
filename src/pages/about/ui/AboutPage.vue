<template>
  <main>
    <div class="wrapper">
      <InnerSection />
      <TeamSection />
    </div>
  </main>
</template>

<script setup lang="ts">
  import InnerSection from './InnerSection/index.vue';
  import { TeamSection } from '@/widgets/TeamSection';
</script>
