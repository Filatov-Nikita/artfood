<template>
  <button type="button" class="loc-btn" ref="elRef" @click="showed = !showed">
    <span>
      Я живу в <span class="loc-btn__label">{{ value === '3' ? 'Городе' : 'Пригороде' }}</span>
    </span>
    <span class="loc-btn__icon-wrap" @click.stop="showedTooltip = !showedTooltip">
      <AppIcon name="question-fill" fit />
    </span>
  </button>
  <template v-if="grid.lg">
    <Transition name="loc-target-anim">
      <div class="tooltip" ref="tooltipRef" v-if="showedTooltip" :style="tooltipStyles" v-click-outside="hideTooltip">
        <p class="tooltip__title">На что влияет выбор района?</p>
        <p class="tooltip__text">Этот параметр влияет на стоимость доставки.</p>
      </div>
    </Transition>
    <Transition name="loc-target-anim">
      <div class="dropdown" ref="targetRef" v-if="showed" :style="floatingStyles" v-click-outside="hideDropdown">
        <div class="option" :class="{ 'option--active': value === '3' }" @click="onChange('3')">
          <span class="tw-grow">Городе</span>
          <span class="option__icon-wrap" v-show="value === '3'">
            <AppIcon name="check-regular" fit />
          </span>
        </div>
        <div class="option" :class="{ 'option--active': value === '4' }" @click="onChange('4')">
          <span class="tw-grow">Пригороде</span>
          <span class="option__icon-wrap" v-show="value === '4'">
            <AppIcon name="check-regular" fit />
          </span>
        </div>
      </div>
    </Transition>
  </template>
  <template v-else>
    <AppModal v-model="showedTooltip" y-pos="bottom" animation="slide-right">
      <div class="card">
        <div class="card-header">
          <span class="tw-grow">На что влияет выбор района?</span>
          <ButtonClose class="tw-shrink-0" size="40px" @click="showedTooltip = false" />
        </div>
        <div class="card-body">
          <p class="card-text">Этот параметр влияет на стоимость доставки.</p>
        </div>
      </div>
    </AppModal>
    <AppModal v-model="showed" y-pos="bottom" animation="slide-right">
      <div class="card">
        <div class="card-header">
          <span class="tw-grow">Я живу в...</span>
          <ButtonClose class="tw-shrink-0" size="40px" @click="showed = false" />
        </div>
        <div class="card-body">
          <div class="card-options">
            <div class="card-option" @click="onChange('3')">
              <span class="card-option__label">Городе</span>
              <span class="card-option__icon-wrap" :class="{ 'card-option__icon-wrap--active': value === '3' }">
                <AppIcon :name="value === '3' ? 'check-circle-fill' : 'circle-regular'" fit />
              </span>
            </div>
            <div class="card-option" @click="onChange('4')">
              <span class="card-option__label">Пригороде</span>
              <span class="card-option__icon-wrap" :class="{ 'card-option__icon-wrap--active': value === '4' }">
                <AppIcon :name="value === '4' ? 'check-circle-fill' : 'circle-regular'" fit />
              </span>
            </div>
          </div>
        </div>
      </div>
    </AppModal>
  </template>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useFloating } from '@floating-ui/vue';
  import { useField } from 'vee-validate';
  import { useAppGrid } from '@/shared/lib/useScreen';

  defineProps<{
    modelValue?: string,
  }>();

  defineEmits<{
    (event: 'update:modelValue', value: string): void,
  }>();

  const grid = useAppGrid();

  const elRef = ref<HTMLElement | null>(null);
  const targetRef = ref<HTMLElement | null>(null);
  const tooltipRef = ref<HTMLElement | null>(null);

  const { floatingStyles } = useFloating(elRef, targetRef);
  const { floatingStyles: tooltipStyles } = useFloating(elRef, tooltipRef, { placement: 'bottom-start' });

  const showed = ref(false);
  const showedTooltip = ref(false);

  const { value, handleChange } = useField('location', undefined, {
    syncVModel: true,
  });

  function hideTooltip() {
    showedTooltip.value = false;
  }

  function hideDropdown() {
      showed.value = false;
  }

  function onChange(val: string) {
    handleChange(val);
    hideDropdown();
  }
</script>

<style scoped lang="scss">
  .loc-btn {
    display: inline-flex;
    align-items: center;
    text-align: left;
    gap: 4px;
    @apply tw-bg-neutral tw-rounded-xl tw-text-body-m-medium tw-px-20 tw-py-12 tw-w-full tw-justify-center;

    @include lg {
      @apply tw-w-auto tw-justify-start;
    }

    &:hover {
      @apply tw-bg-neutral-hover;
    }

    &:active {
      @apply tw-bg-neutral-press;
    }

    &__label {
      @apply tw-text-body-m-bold -tw-tracking-2 tw-text-primary;
    }

    &__icon-wrap {
      width: 24px;
      height: 24px;
      @apply tw-text-text01;
    }
  }

  .loc-target-anim {
    &-enter-active {
      animation-name: fadeIn;
      animation-duration: 200ms;
    }

    &-leave-active {
      animation-name: fadeOut;
      animation-duration: 200ms;
    }
  }

  .tooltip {
    z-index: 11;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.08), -2px 9px 10px 0 rgba(0, 0, 0, 0.07), -4px 21px 13px 0 rgba(0, 0, 0, 0.03), -7px 37px 15px 0 rgba(0, 0, 0, 0.01), -12px 58px 17px 0 rgba(0, 0, 0, 0);
    @apply tw-bg-white tw-rounded-xl tw-p-16;

    &__title {
      @apply tw-text-body-s-bold tw-mb-8 -tw-tracking-2;
    }

    &__text {
      @apply tw-text-body-xs-regular;
    }
  }

  .dropdown {
    z-index: 10;
    min-width: 184px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.08), -2px 9px 10px 0 rgba(0, 0, 0, 0.07), -4px 21px 13px 0 rgba(0, 0, 0, 0.03), -7px 37px 15px 0 rgba(0, 0, 0, 0.01), -12px 58px 17px 0 rgba(0, 0, 0, 0);
    @apply tw-rounded-xl tw-p-8 tw-bg-white;
  }

  .option {
    cursor: pointer;
    display: flex;
    border-radius: 8px;
    @apply tw-text-body-m-bold -tw-tracking-2 tw-p-12;

    &:hover {
      @apply tw-bg-neutral-hover;
    }

    &:active {
      @apply tw-bg-neutral-press;
    }

    & + & {
      @apply tw-mt-4;
    }

    &--active {
      @apply tw-bg-neutral;
    }

    &__icon-wrap {
      width: 24px;
      height: 24px;
      @apply tw-text-primary;
    }
  }

  .card {
    @apply tw-bg-white tw-rounded-1.5xl tw-p-24 tw-w-full;
  }

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @apply tw-text-body-m-bold;
  }

  .card-body {
    @apply tw-pt-16;
  }

  .card-text {
    @apply tw-text-body-s-medium;
  }

  .card-option {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 16px;
    @apply tw-py-16 tw-text-body-s-bold -tw-tracking-2;

    & + & {
      @apply tw-border-t tw-border-solid tw-border-border01;
    }
  }

  .card-option__label {
    @apply tw-grow;
  }

  .card-option__icon-wrap {
    width: 24px;
    height: 24px;
    @apply tw-text-text01;

    &--active {
      @apply tw-text-primary;
    }
  }
</style>
