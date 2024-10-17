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
        <p>{{ promoText }}</p>
      </div>
    </div>
    <div class="items">
      <Item
        class="team-item"
        v-for="item in items"
        v-bind="item"
      />
    </div>
    <Slider class="photos" :items="photoItems" />
  </section>
</template>

<script setup lang="ts">
  import Item from './Item.vue';
  import Slider from './Slider.vue';
  import promoText from '../model/promoText';
  import items from '../model/items';
  import photoItems from '../model/photoItems';

  interface Props {
    hidePromoText?: boolean,
  }

  withDefaults(
    defineProps<Props>(),
    {
      hidePromoText: false,
    },
  );
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

  .items {
    display: flex;
    flex-wrap: wrap;
    margin: -6px;

    @include lg {
      margin: -10px;
    }
  }

  .team-item {
    margin: 6px;
    width: calc(100% - 12px);

    @include lg {
      margin: 10px;
      width: calc(50% - 20px);
    }

    @include xl {
      width: calc(25% - 20px);
    }
  }

  .photos {
    @apply tw-mt-20;
  }
</style>
