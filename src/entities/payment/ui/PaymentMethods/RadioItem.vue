<template>
  <AppButton
    class="radio"
    :class="{ 'radio--checked': checked }"
    design="secondary-neutral"
    :leftIcon="icon"
    :rightIcon="checked ? 'radio-button-fill' : 'circle-regular'"
    size="56"
    @click="handleChange"
  >
    {{ label }}
  </AppButton>
</template>

<script setup lang="ts">
  import { useField } from 'vee-validate';
  import { toRefs } from 'vue';

  const props = defineProps<{
    name: string,
    label: string,
    icon: string,
    checkedValue: string,
  }>();

  const { name, checkedValue } = toRefs(props);

  const { checked, handleChange } = useField(name, undefined, {
    type: 'radio',
    checkedValue,
  });
</script>

<style scoped lang="scss">
  .radio {
    &:deep(.right-icon) {
      color: theme('colors.text01');
    }

    &--checked {
      &:deep(.right-icon) {
        color: theme('colors.primary') !important;
      }
    }
  }
</style>
