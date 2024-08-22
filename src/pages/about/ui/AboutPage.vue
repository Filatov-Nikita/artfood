<template>
  <PrimaryLayout>
    <main>
      <div class="wrapper">
        <InnerSection />
        <TeamSection />
      </div>
    </main>
  </PrimaryLayout>
</template>

<script setup lang="ts">
  import { PrimaryLayout } from '@/layouts/Primary';
  import InnerSection from './InnerSection/index.vue';
  import { TeamSection } from '@/widgets/TeamSection';
</script>
