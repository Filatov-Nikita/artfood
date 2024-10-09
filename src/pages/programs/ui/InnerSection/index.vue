<template>
  <InnerSectionBase
    class="about-sec"
    :img="{ width: 100, height: 100, path: '/images/product.jpg' }"
  >
    <template #first>
      <h1 class="h1">Комплексные программы питания</h1>
    </template>
    <template #last>
      <p class="subtitle">
        Наш диетолог Мария Егорова разработала специальные программы питания для мужчин и женщин, учитывая образ жизни и физическую активность. С нами вы убедитесь, что полезное питание может быть вкусным!
      </p>
    </template>
  </InnerSectionBase>
</template>

<script setup lang="ts">
  import { InnerSectionBase } from '@/shared/ui';
  import { useCurrentDate } from '@/shared/lib';

  const { year } = useCurrentDate();
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
