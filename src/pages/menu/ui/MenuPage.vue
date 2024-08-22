<template>
  <PrimaryLayout>
    <main class="page--pt">
      <div class="wrapper">
        <h1 class="h1 h-mb-16">Меню доставки</h1>
        <MenuNav />
        <SectionListItem
          v-if="items && items.length > 0"
          :name="items[0].section_name"
          :products="items"
        />
      </div>
    </main>
  </PrimaryLayout>
</template>

<script setup lang="ts">
  import { PrimaryLayout } from '@/layouts/Primary';
  import MenuNav from './MenuNav/index.vue';
  import useMenuElements from '../model/useMenuElements';
  import { SectionListItem } from '@/entities/product';
  import { useRoute } from 'vue-router';
  import { computed } from 'vue';

  const route = useRoute();

  const { items, load } = useMenuElements(computed(() => route.params.section as string));

  await load();
</script>
