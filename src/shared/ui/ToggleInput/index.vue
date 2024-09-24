<template>
  <div class="app-toggle">
    <div class="app-toggle__toggle" @click="handleChange(checkedValue)">
      <div class="app-toggle__input" :class="{ 'app-toggle__input--active': checked }">
        <div class="app-toggle__dot" :class="{ 'app-toggle__dot--active': checked }"></div>
      </div>
      <label v-if="label" class="app-toggle__label">{{ label }}</label>
    </div>
    <transition
      leave-active-class="animate__animated anim-300ms animate__fadeOutUp"
      enter-active-class="animate__animated anim-300ms animate__shakeX"
    >
      <div v-if="errorMessage" class="app-toggle__error-msg">
        {{ errorMessage }}
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
  import { useField } from 'vee-validate';

  interface Props {
    name: string,
    rules?: string,
    label?: string,
    modelValue?: any,
    checkedValue?: any,
    uncheckedValue?: any,
  }

  const props = withDefaults(defineProps<Props>(), {
    checkedValue: true,
    uncheckedValue: false,
  });

  const { checked, handleChange, errorMessage } = useField(props.name, props.rules, {
    type: 'checkbox',
    syncVModel: true,
    checkedValue: props.checkedValue,
    uncheckedValue: props.uncheckedValue,
    label: props.label
  });
</script>
<style scoped lang="scss">
  .app-toggle {
    display: inline-block;

    &__toggle {
      display: flex;
      align-items: center;
      gap: 8px;
      user-select: none;
    }

    &__input {
      cursor: pointer;
      min-width: 48px;
      height: 24px;
      border-radius: 12px;
      border-width: 1px;
      border-style: solid;
      border-color: theme('colors.neutral');
      background-color: theme('colors.neutral');
      line-height: 22px;
      padding: 0 4px;
      font-size: 0;

      &--active {
        background-color: theme('colors.primary');
        border-color: theme('colors.primary');
      }
    }

    &__dot {
      display: inline-block;
      vertical-align: middle;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      border-width: 2px;
      border-style: solid;
      border-color: theme('colors.text02');
      background-color: theme('colors.text02');
      transition: transform 300ms;

      &--active {
        background-color: theme('colors.white');
        border-color: theme('colors.white');
        transform: translateX(24px);
      }
    }

    &__label {
      @apply tw-text-text00 tw-text-body-m-bold -tw-tracking-2;
    }

    &__error-msg {
      @apply tw-mt-4 tw-text-red tw-text-body-s-regular;
    }
  }
</style>
