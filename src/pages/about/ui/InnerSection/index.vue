<template>
  <InnerSectionBase
    class="about-sec"
    :img="{ width: 100, height: 100, path: '/images/product.jpg' }"
  >
    <template #first>
      <h1 class="h1">О компании</h1>
    </template>
    <template #last>
      <p class="title">Ресторан доставки здоровой еды</p>
      <p class="subtitle">Доставка вкусных и&nbsp;здоровых обедов в&nbsp;течение дня в&nbsp;офис и&nbsp;на&nbsp;дом</p>
    </template>
  </InnerSectionBase>
</template>

<script setup lang="ts">
  import { InnerSectionBase } from '@/shared/ui';
</script>

<style scoped lang="scss">
  .title {
    letter-spacing: -0.02em;
    @apply tw-text-body-l-bold tw-mb-12;
  }

  .subtitle {
    @apply tw-text-body-m-medium;
  }

  .about-sec {
    :deep(.first) {
      @apply tw-pb-16;
    }

    :deep(.last) {
      @apply tw-pt-10;
    }

    :deep(.decor-img) {
      @apply tw-w-full;
    }
  }
</style>
