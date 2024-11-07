<template>
  <section class="team">
    <div class="promo-wrap">
      <div class="logo-col">
        <div class="logo-wrap">
          <span class="logo-img">
            <AppLogo class="tw-w-full" />
          </span>
          <span class="logo-title">в цифрах</span>
        </div>
      </div>
      <div v-if="!hidePromoText" class="promo-text">
        <p>{{ text }}</p>
      </div>
    </div>
    <Items />
    <Slider class="photos" />
  </section>
</template>

<script setup lang="ts">
  import Slider from './Slider.vue';
  import Items from './Items.vue';

  interface Props {
    hidePromoText?: boolean,
  }

  withDefaults(
    defineProps<Props>(),
    {
      hidePromoText: false,
    },
  );

  const text = 'Если вы уже хотите провести мероприятие, не забудьте заранее забронировать зал. После этого наши специалисты обсудят с вами тематику, оформление и меню. Затем вам останется лишь прийти на свой праздник и насладиться им со своими близкими людьми';
</script>

<style scoped lang="scss">
  .team {
    @apply tw-pt-32;

    @include lg {
      @apply tw-pt-40;
    }

    @include xl {
      @apply tw-pt-64;
    }
  }

  .logo-col {
    @include lg {
      width: 50%;
    }
  }

  .logo-wrap {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    gap: 12px;
  }

  .logo-title {
    @apply tw-text-heading-3-bold;
  }

  .logo-img {
    width: 144px;
  }

  .promo-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    @apply tw-mb-24;

    @include lg {
      gap: 0px;
      @apply tw-mb-32;
    }

    @include xl {
      @apply tw-mb-40;
    }
  }

  .promo-text {
    width: 100%;
    @apply tw-text-body-m-medium;

    @include lg {
      width: 50%;
    }

    @include xl {
      padding-right: 100px;
    }
  }

  .photos {
    @apply tw-mt-20;
  }
</style>
