<template>
  <div class="field">
    <div
      class="inp-root"
      :class="{ 'inp-root--error': errorMessage, 'inp-root--focused': focused }"
    >
      <span class="icon-left" v-if="iconLeft">
        <AppIcon :name="iconLeft" fit />
      </span>
      <div class="inp-wrap">
        <input
          class="inp"
          :class="{ 'inp--filled': filled }"
          :id="name"
          :name="name"
          :type="type"
          :value="value"
          v-maska="maska"
          @input="handleChange"
          @focus="focused = true"
          @blur="focused = false"
        />
        <label class="label" :class="{ 'label--error': errorMessage }" :for="name">
          {{ label }}
        </label>
      </div>
      <span class="icon-right" v-if="iconRight">
        <AppIcon :name="iconRight" fit />
      </span>
    </div>
    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref, toRefs, type Ref } from 'vue';
  import { useField, type RuleExpression } from 'vee-validate';
  import { vMaska } from 'maska/vue';

  type IType = 'text' | 'number' | 'email' | 'tel';

  interface Props {
    name: string,
    label: string,
    type?: IType,
    iconLeft?: string,
    iconRight?: string,
    rules?: RuleExpression<string>,
    maska?: string,
  }

  defineOptions({
    inheritAttrs: true,
  });

  const props = withDefaults(
    defineProps<Props>(),
    {
      type: 'text',
    },
  );

  const emit = defineEmits<{
    (event: 'update:modelValue', value: string): void,
  }>();

  const { name, rules } = toRefs(props);

  const model = defineModel<string>();

  const { value, handleChange, errorMessage } = useField<string>(name, rules, {
    initialValue: model as Ref<string>,
    syncVModel: true,
  });

  const focused = ref(false);

  const filled = computed(() => {
    return value.value && value.value.length > 0;
  });
</script>

<style scoped lang="scss">
  .field:hover .inp-root {
    @apply tw-bg-neutral-hover;
  }

  .inp-root {
    display: flex;
    align-items: center;
    gap: 4px;
    width: 100%;
    height: 56px;
    padding: 0px 16px;
    transition: background-color 300ms;
    @apply tw-rounded-xl tw-bg-neutral tw-border tw-border-solid tw-border-neutral;

    &--focused {
      @apply tw-bg-neutral-hover;
    }

    &--error {
      border-color: theme('colors.red') !important;
      background-color: theme('colors.red-10%') !important;
    }
  }

  .inp-wrap {
    position: relative;
    flex-grow: 1;
    height: 100%;
  }

  .inp {
    display: block;
    width: 100%;
    background: transparent;
    outline: none;
    letter-spacing: -0.02em;
    height: 100%;
    @apply tw-text-body-m-bold tw-text-text00 tw-pt-24 tw-pb-8;
  }

  .label {
    position: absolute;
    top: 15px;
    left: 0px;
    letter-spacing: -0.02em;
    transition: font-size 500ms, top 500ms;
    z-index: 10;
    @apply tw-text-body-m-bold tw-text-text01;

    &--error {
      @apply tw-text-red;
    }
  }

  .inp:focus ~ .label, .inp--filled ~ .label {
    top: 8px;
    @apply tw-text-body-xs-medium;
  }

  .error {
    @apply tw-text-body-s-regular tw-text-red tw-mt-4;
  }

  .icon-left, .icon-right {
    width: 24px;
    height: 24px;
    padding: 4px;
  }
</style>
