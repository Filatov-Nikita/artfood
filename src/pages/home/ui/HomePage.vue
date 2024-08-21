<template>
  <PrimaryLayout>
    <main>
      <div class="wrapper">
        <MenuSections />
        <HomeSectionList v-if="homeSections" :items="homeSections"/>
        <TeamSection />
      </div>
    </main>
  </PrimaryLayout>
</template>

<script setup lang="ts">
  import { PrimaryLayout } from '@/layouts/Primary';
  import MenuSections from './MenuSections/index.vue';
  import { TeamSection } from '@/widgets/TeamSection';
  import HomeSectionList from './HomeSectionList/index.vue';
  import useHomeMenu from '../model/useHomeMenu';

  const { homeSections, load: getHomeMenu } = useHomeMenu();

  await getHomeMenu();
</script>
