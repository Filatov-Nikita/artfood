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

    @include lg {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 24px;
      @apply tw-mb-32;
    }

    @include xl {
      @apply tw-mb-40;
    }
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: -6px;

    @include lg {
      margin: -10px;
    }
  }

  .item {
    width: 100%;
    margin: 6px;

    @include lg {
      width: calc(50% - 20px);
      margin: 10px;
    }

  }

  .subtitle {
    @apply tw-text-body-m-medium tw-mt-12;

    @include lg {
      @apply tw-mt-0;
    }

    @include xl {
      padding-right: 185px;
    }
  }
</style>
