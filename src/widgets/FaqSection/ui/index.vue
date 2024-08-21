<template>
  <section class="faq">
    <div class="title-wrap">
      <h2 class="h1">Вопрос→<span class="tw-text-primary">ответ</span></h2>
      <p class="subtitle">Отвечаем на частозадавамые вопросы наших клиентов</p>
    </div>
    <div class="items">
      <SlideItem class="item" bordered label="Почему правильная пища так важна для организма?">
        1
      </SlideItem>
      <SlideItem class="item" bordered label="Почему правильная пища так важна для организма?">
        2
      </SlideItem>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { SlideItem } from '@/shared/ui';
</script>

<style scoped lang="scss">
  .faq {
    padding-top: 40px;
  }

  .title-wrap {
    @apply tw-mb-24;
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    margin: -6px;
  }

  .item {
    width: 100%;
    margin: 6px;
  }

  .subtitle {
    @apply tw-text-body-m-medium tw-mt-12;
  }
</style>
