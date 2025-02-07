<template>
  <section class="faq">
    <div class="title-wrap">
      <h2 class="h1">Вопрос→<span class="tw-text-primary">ответ</span></h2>
      <p class="subtitle">Отвечаем на часто задаваемые вопросы наших клиентов</p>
    </div>
    <div class="items">
      <SlideItem class="item" bordered label="Сколько еды нужно на стандартный 5-6 часовой банкет?">
        «Золотой стандарт» - 1300-1500 грамм еды на&nbsp;персону (без&nbsp;напитков). Мы&nbsp;рекомендуем придерживаться следующего принципа расчета на&nbsp;1&nbsp;гостя: холодные закуски 400&nbsp;гр, горячая закуска 150-200&nbsp;гр, первое горячее 350&nbsp;гр, второе горячее в&nbsp;стол 250&nbsp;гр еды на&nbsp;гостя и&nbsp;десерт 100&nbsp;гр.
      </SlideItem>
      <SlideItem class="item" bordered label="В какой упаковке приезжает доставка сетов канапе?">
        Есть несколько вариантов: брендированные крафт-коробки, деревянные доски, фарфоровые тарелки. Выбирайте на&nbsp;ваше усмотрение) И&nbsp;не&nbsp;забудьте отметить выбранный вариант упаковки при&nbsp;оформлении заказа.
      </SlideItem>
      <SlideItem class="item" bordered label="У вас на сайте есть готовые сеты. Можно ли их корректировать по количеству гостей?">
        Да, конечно. Напишите нам в&nbsp;любой мессенджер (tg, whatsapp) и&nbsp;мы&nbsp;вам поможем с&nbsp;пересчетом на&nbsp;нужное количество гостей.
      </SlideItem>
      <SlideItem class="item" bordered label="Эффективны ли ваши программы питания?">
        Да, ведь они&nbsp;составлены грамотным диетологом-нутрициологом. Есть лишь одно условие: важно соблюдать режим, тогда все&nbsp;получится!
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

    @include xl {
      padding-top: 64px;
    }
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
