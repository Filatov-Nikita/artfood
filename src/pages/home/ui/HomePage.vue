<template>
  <PrimaryLayout>
    <main class="page--py">
      <div class="wrapper">
        <MenuSections />
        <HomeSectionList
          :items="sections"
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
  import { FaqSection } from '@/widgets/FaqSection';
  import useRequest from '@/shared/lib/useRequest';
  import { useRepositories } from '@/shared/repositories';
  import useDataOrFail from '@/shared/lib/useDataOrFail';
  import { CardDetailed } from '@/entities/product';
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
