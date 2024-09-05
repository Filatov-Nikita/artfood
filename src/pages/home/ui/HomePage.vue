<template>
  <PrimaryLayout>
    <main>
      <div class="wrapper">
        <MenuSections />
        <HomeSectionList
          v-if="homeSections"
          :items="homeSections"
          @change:product="changeProduct"
        />
        <TeamSection />
        <FaqSection />
        <CardDetailed v-if="productDetailed" v-model="showedDetailed" :product="productDetailed" />
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
  import { FaqSection } from '@/widgets/FaqSection';
  import { useCardModal, CardDetailed } from '@/entities/product';

  const { homeSections, load: getHomeMenu } = useHomeMenu();

  const { productDetailed, showedDetailed, changeProduct } = useCardModal();

  await getHomeMenu();
</script>
