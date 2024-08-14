<template>
  <section class="team">
    <div class="promo-wrap">
      <div class="logo-wrap">
        <span class="logo-img">
          <AppLogo class="tw-w-full" />
        </span>
        <span class="logo-title">в цифрах</span>
      </div>
      <div v-if="!hidePromoText" class="promo-text">
        <p>{{ promoText }}</p>
      </div>
    </div>
    <div class="items">
      <Item
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
  }

  .promo-text {
    width: 100%;
    @apply tw-text-body-m-medium;
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    margin: -6px;
  }

  .photos {
    @apply tw-mt-20;
  }
</style>
