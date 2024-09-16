<template>
  <AppModal v-model="value" x-pos="right" y-pos="top" animation="slide-right">
    <div class="card-wrap">
      <div class="card">
        <div class="title-wrap">
          <p class="title">Корзина</p>
          <AppButton
            class="clear-btn"
            design="ghost-neutral"
            size="56"
            @click="clearAllDialog = true"
            :disabled="basket.length === 0"
          >
            Очистить
          </AppButton>
          <InnerDialog
            v-model="clearAllDialog"
            title="Очистить корзину?"
            rejectLabel="Оставить"
            acceptLabel="Очистить"
            @reject="clearAllDialog = false"
            @accept="clearAll"
          >
            Если вы очистите корзину, то все товары будут потеряны
          </InnerDialog>
        </div>
        <ProductsList class="list" :basket="basket" @remove="basketStore.remove" />
        <div class="card-bottom" v-if="basket.length > 0">
          <BlockTotal :basket="basket" />
          <AppButton class="order" design="primary" size="56">Оформить заказ</AppButton>
        </div>
      </div>
    </div>
  </AppModal>
</template>

<script setup lang="ts">
  import { useBasketStore } from '@/shared/store/basket';
  import { storeToRefs } from 'pinia';
  import ProductsList from '../ProductsList/index.vue';
  import BlockTotal from './BlockTotal.vue';
  import { ref } from 'vue';

  const value = defineModel({ default: false });

  const basketStore = useBasketStore();

  const { basket } = storeToRefs(basketStore);

  const clearAllDialog = ref(false);

  function clearAll() {
    basketStore.clearAll();
    clearAllDialog.value = false;
  }
</script>

<style scoped lang="scss">
  .card-wrap {
    position: relative;
    @apply tw-w-full tw-h-full tw-rounded-1.5xl;
  }

  .card {
    display: flex;
    flex-direction: column;
    overflow: auto;
    @apply tw-rounded-1.5xl tw-bg-white tw-p-16 tw-pt-28 tw-w-full tw-h-full;
  }

  .title {
    @apply tw-text-body-l-bold -tw-tracking-2;
  }

  .title-wrap {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    @apply tw-mb-24;
  }

  .clear-btn {
    font-weight: 500 !important;
    color: theme('colors.text01');
  }

  .order {
    @apply tw-w-full tw-mt-24;
  }

  .list {
    @apply tw-mb-24;
  }

  .card-bottom {
    margin-top: auto;
  }
</style>
