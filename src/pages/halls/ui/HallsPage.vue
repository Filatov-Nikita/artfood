<template>
  <main class="page--py">
    <div class="wrapper">
      <InnerSection />
      <HallList :halls="halls" class="section--mb" />
      <AboutSection />
      <GallerySection baseUrl="/" :images="[ 'images/halls/1.jpg', 'images/halls/1.jpg' ]" />
      <FaqSection />
    </div>
  </main>
</template>

<script setup lang="ts">
  import InnerSection from './InnerSection/index.vue';
  import GallerySection from './GallerySection.vue';
  import { FaqSection } from '@/widgets/FaqSection';
  import { HallList } from '@/entities/hall';
  import { AboutSection } from '@/entities/catering'
  import { useRepositories } from '@/shared/repositories';
  import useRequest from '@/shared/lib/useRequest';
  import useDataOrFail from '@/shared/lib/useDataOrFail';

  const api = useRepositories();
  const halls = useDataOrFail(await useRequest(api.halls.all));
</script>
