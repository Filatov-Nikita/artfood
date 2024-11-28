<template>
  <div v-if="basket" class="mini-basket">
    <div class="total">
      <span class="total-label">Итого</span>
      <span class="total-value">{{ $amount(basket.itogo) }}</span>
    </div>
    <div class="line">
      <span class="label">Выход на персону</span>
      <span class="value">{{ $formatValue(basket.na_personu) }} г</span>
    </div>
    <div class="line">
      <span class="label">Общий выход</span>
      <span class="value">{{ $formatValue(basket.obsh_vihod) }} г</span>
    </div>
    <div class="line">
      <span class="label">Стоимость на персону</span>
      <span class="value">{{ $amount(basket.st_na_personu) }}</span>
    </div>
    <slot name="actions"></slot>
  </div>
</template>

<script setup lang="ts">
  import { useBanquetStore } from '@/shared/store/banquet';
  import { computed, watch } from 'vue';

  const banquetStore = useBanquetStore();

  const basket = computed(() => banquetStore.miniBasket);

  watch([
    () => banquetStore.personsCount,
    () => banquetStore.basket,
  ], async () => {
    if(banquetStore.basketId) {
      banquetStore.showMiniBasket(banquetStore.basketId, banquetStore.personsCount);
    }
  });
</script>

<style scoped lang="scss">
  .mini-basket {
    @apply tw-bg-neutral tw-rounded-xl tw-p-16;
  }

  .line, .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }

  .line {
    @apply tw-mb-8;
  }

  .total {
    @apply tw-text-body-l-bold -tw-tracking-2 tw-mb-16;
  }

  .label {
    @apply tw-text-text01 tw-text-body-s-medium;
  }

  .value {
    @apply tw-text-body-s-medium;
  }
</style>
