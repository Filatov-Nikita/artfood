<template>
  <div v-if="basket" class="basket" ref="basketRef">
    <div v-if="full" class="line">
      <span class="label">Количество персон</span>
      <span class="value">{{ $formatValue(banquetStore.personsCount) }}</span>
    </div>
    <div v-if="full" class="line">
      <span class="label">Выход на персону</span>
      <span class="value">{{ $formatValue(basket.na_personu) }} г</span>
    </div>
    <div class="line">
      <span class="label">Общий выход</span>
      <span class="value">{{ $formatValue(basket.obsh_vihod) }} г</span>
    </div>
    <div v-if="full" class="line">
      <span class="label">Стоимость на персону</span>
      <span class="value">{{ $amount(basket.st_na_personu) }}</span>
    </div>
    <div class="total">
      <span class="total-label">Итого</span>
      <span class="total-value">{{ $amount(basket.itogo) }}</span>
    </div>
    <AppButton
      v-if="!hideChangePersons"
      class="tw-w-full tw-mt-8"
      size="36"
      design="secondary-neutral"
      left-icon="users-regular"
      @click="showedModal = true"
    >
      Количество персон: {{ banquetStore.personsCount }}
    </AppButton>
    <AppModal v-if="!hideChangePersons" v-model="showedModal" y-pos="bottom" animation="slide-right">
      <div class="modal-card">
        <div class="modal-card__title-wrap">
          <span class="modal-card__title">Количество персон</span>
          <ButtonClose class="tw-shrink-0" size="40px" @click="showedModal = false" />
        </div>
        <div class="line">
          <span class="label">Выход на персону</span>
          <span class="value">{{ $formatValue(basket.na_personu) }} г</span>
        </div>
        <div class="line">
          <span class="label">Стоимость на персону</span>
          <span class="value">{{ $amount(basket.st_na_personu) }}</span>
        </div>
        <div class="total">
          <span class="total-label">Итого</span>
          <span class="total-value">{{ $amount(basket.itogo) }}</span>
        </div>
        <AppButton class="tw-w-full tw-mt-16" size="48" @click="showedModal = false">
          Готово
        </AppButton>
      </div>
    </AppModal>
    <slot name="actions"></slot>
  </div>
</template>

<script setup lang="ts">
  import { useBanquetStore } from '@/shared/store/banquet';
  import { computed, onMounted, onUpdated, ref, watch } from 'vue';

  withDefaults(
    defineProps<{
      full?: boolean,
      hideChangePersons?: boolean,
    }>(),
    {
      full: false,
      hideChangePersons: false,
    }
  );

  const banquetStore = useBanquetStore();

  const basketRef = ref<HTMLElement | null>(null);

  const basket = computed(() => banquetStore.miniBasket);

  const showedModal = ref(false);

  const emit = defineEmits<{
    (event: 'change:height', value: string): void,
  }>();

  function calcHeight() {
    if(basketRef.value) {
      emit('change:height', basketRef.value.offsetHeight + 'px');
    }
  }

  onMounted(() => {
    calcHeight();
  });

  onUpdated(() => {
    calcHeight();
  });

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
  .basket {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 9000;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.08), -2px 9px 10px 0 rgba(0, 0, 0, 0.07), -4px 21px 13px 0 rgba(0, 0, 0, 0.03), -7px 37px 15px 0 rgba(0, 0, 0, 0.01), -12px 58px 17px 0 rgba(0, 0, 0, 0);
    @apply tw-bg-white tw-p-16 tw-border-t tw-border-solid tw-border-border00;
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
    @apply tw-text-body-m-bold -tw-tracking-2;
  }

  .label {
    @apply tw-text-text01 tw-text-body-s-medium;
  }

  .value {
    @apply tw-text-body-s-medium;
  }

  .modal-card {
    @apply tw-bg-white tw-w-full tw-rounded-1.5xl tw-p-24;

    &__title-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      @apply tw-mb-16;
    }

    &__title {
      @apply tw-text-body-m-bold -tw-tracking-2;
    }
  }
</style>
