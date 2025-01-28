<template>
  <AppModal v-model="value" x-pos="right" y-pos="top" animation="slide-right">
    <div class="card-wrap">
      <div class="card">
        <div class="title-wrap">
          <p class="title">Корзина</p>
          <div class="card-top-actions">
            <AppButton
              class="clear-btn"
              design="ghost-neutral"
              size="56"
              @click="clearAllDialog = true"
              :disabled="basket.length === 0"
            >
              Очистить
            </AppButton>
            <ButtonClose v-if="grid.lg" class="tw-shrink-0" size="40px" padding="0.2em" @click="value = false" />
          </div>
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
        <div class="card-bottom">
          <BlockTotal v-if="basket.length > 0" :basket="basket" />
          <div class="card-actions">
            <AppButton class="order" design="primary" size="48" lg-size="56" :disabled="basket.length <= 0" @click="showOrder">
              Оформить заказ
            </AppButton>
            <ButtonClose v-if="!grid.lg" class="tw-shrink-0" size="48px" padding="0.25em" @click="value = false" />
          </div>
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
  import { useAppGrid } from '@/shared/lib/useScreen';
  import { useRouter } from 'vue-router';

  const grid = useAppGrid();

  const router = useRouter();

  const value = defineModel({ default: false });

  const basketStore = useBasketStore();

  const { basket } = storeToRefs(basketStore);

  const clearAllDialog = ref(false);

  function clearAll() {
    basketStore.clearAll();
    clearAllDialog.value = false;
  }

  function showOrder() {
    router.push({ name: 'order' });
    value.value = false;
  }
</script>

<style scoped lang="scss">
  .card-wrap {
    position: relative;
    @apply tw-w-full tw-h-full tw-rounded-1.5xl;

    @include lg {
      max-width: 464px;
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    overflow: auto;
    @apply tw-rounded-1.5xl tw-bg-white tw-p-16 tw-pt-28 tw-w-full tw-h-full;

    @include lg {
      @apply tw-p-24;
    }
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
    @apply tw-mb-8;
  }

  .card-wrap .clear-btn {
    font-weight: 500 !important;
    color: theme('colors.text01');
  }

  .order {
    @apply tw-w-full;
  }

  .list {
    @apply tw-mb-24;
  }

  .card-bottom {
    margin-top: auto;
    @apply tw-border-t tw-border-solid tw-border-border01 tw-bg-white tw-sticky tw-bottom-0 tw-transform tw-translate-y-16 tw-pb-16;
    @include lg {
      @apply tw-translate-y-24 tw-pb-24;
    }
  }

  .card-actions {
    display: flex;
    gap: 8px;
    @apply tw-mt-16;
  }

  .card-top-actions {
    @include lg {
      display: flex;
      align-items: center;
      gap: 16px;
    }
  }
</style>
