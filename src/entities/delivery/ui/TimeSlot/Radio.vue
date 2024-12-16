<template>
  <AppButton
    class="radio"
    :class="{ 'radio--checked': checked }"
    design="ghost-neutral"
    size="56"
    :rightIcon="checked ? 'radio-button-fill' : 'circle-regular'"
    @click="handleChange"
  >
    {{ label }}
  </AppButton>
</template>


<script setup lang="ts">
  import { useField } from 'vee-validate';
  import { toRefs } from 'vue';
  import { type RuleExpression } from 'vee-validate';

  const props = defineProps<{
    name: string,
    label: string,
    checkedValue: string,
    modelValue?: string,
    rules?: RuleExpression<string>,
  }>();

  defineEmits<{
    (event: 'update:modelValue', value: string): void,
  }>();

  const { name, checkedValue } = toRefs(props);

  const { checked, handleChange } = useField(name, props.rules, {
    type: 'radio',
    checkedValue,
    syncVModel: true,
  });
</script>

<style scoped lang="scss">

</style>

<style scoped lang="scss">
  .radio {
    width: 100%;

    &.size-56 {
      padding-top: 16px;
      padding-bottom: 16px;
    }

    &:deep(.label) {
      flex-grow: 1;
      text-align: left;
    }

    &:deep(.right-icon) {
      color: theme('colors.text01');
    }

    &--checked {
      &:deep(.right-icon) {
        color: theme('colors.primary') !important;
      }
    }

    & + & {
      @apply tw-border-t tw-border-solid tw-border-border01;
    }
  }
</style>
