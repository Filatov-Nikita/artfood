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
    <div class="divider"></div>
    <div class="counter">
      <div class="counter-label">Количество персон</div>
      <ButtonMinMaxMini
        class="tw-w-full"
        size="xl"
        :count="banquetStore.personsCount"
        @reduce="banquetStore.reducePerson"
        @append="banquetStore.appendPerson"
      />
    </div>
    <slot name="actions"></slot>
  </div>
</template>

<script setup lang="ts">
  import { useBanquetStore } from '@/shared/store/banquet';
  import { computed, watch } from 'vue';
  import { ButtonMinMaxMini } from '@/shared/ui';

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
    & + & {
      @apply tw-mt-8;
    }
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

  .divider {
    @apply tw-my-16 tw-border-t tw-border-solid tw-border-border01;
  }

  .counter {
    @apply tw-rounded-xl tw-bg-white tw-py-8 tw-px-16;
  }

  .counter-label {
    @apply tw-text-text01 tw-text-body-s-regular tw-mb-8;
  }
</style>
