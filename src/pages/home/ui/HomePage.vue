<template>
  <main class="page--py">
    <div class="wrapper">
      <BannersSlider class="section--mb" />
      <MenuSections />
      <HomeSectionList
        class="section--mb"
        :items="sections"
        @change:product="changeProduct"
      />
      <HallsSection />
      <TeamSection />
      <FaqSection />
      <CardDetailed v-if="activeProduct" v-model="showedProduct" :productId="activeProduct" @change:product="activeProduct = $event" />
    </div>
  </main>
</template>

<script setup lang="ts">
  import MenuSections from './MenuSections/index.vue';
  import BannersSlider from './BannersSlider/index.vue';
  import { TeamSection } from '@/widgets/TeamSection';
  import HomeSectionList from './HomeSectionList/index.vue';
  import { FaqSection } from '@/widgets/FaqSection';
  import useRequest from '@/shared/lib/useRequest';
  import { useRepositories } from '@/shared/repositories';
  import useDataOrFail from '@/shared/lib/useDataOrFail';
  import { CardDetailed } from '@/entities/menu';
  import { AboutSection as HallsSection } from '@/entities/hall';
  import { ref } from 'vue';

  const api = useRepositories();
  const res = await useRequest(api.menu.sectionsMainAll);
  const sections = useDataOrFail(res);

  const activeProduct = ref<string | null>(null);
  const showedProduct = ref(false);

  function changeProduct(productId: string) {
    activeProduct.value = productId;
    showedProduct.value = true;
  }
</script>
