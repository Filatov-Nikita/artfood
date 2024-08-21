<template>
  <section class="section">
    <p class="name">{{ item.name }}</p>
    <div class="items">
      <ProductItem
        class="item"
        v-for="good in item.goods"
        :key="good.id"
        :name="good.name"
        :image="good.img"
        :gram="good.ves"
        :badge="good.tag"
        :personsCount="good.presons_count"
        :text="good.podpis"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
  import type { HomeSection } from '../../model/useHomeMenu';
  import { ProductItem } from '@/shared/ui';

  defineProps<{
    item: HomeSection,
  }>();
</script>

<style scoped lang="scss">
  .section {
    padding-top: 40px;
  }

  .name {
    letter-spacing: -0.02em;
    @apply tw-text-body-l-bold tw-mb-24;
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    margin-top: -40px;
  }

  .item {
    width: 100%;
    margin-top: 40px;
  }
</style>
