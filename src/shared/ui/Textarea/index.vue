<template>
  <div class="textarea">
    <label class="label" :for="name">{{ label }}</label>
    <textarea
      :id="name"
      class="input"
      :placeholder="placeholder"
      :value="value"
      @input="handleChange"
    ></textarea>
    <div class="error" v-if="errorMessage">{{ errorMessage }}</div>
  </div>
</template>

<script setup lang="ts">
  import { toRefs } from 'vue';
  import { useField, type RuleExpression } from 'vee-validate';

  const props = defineProps<{
    name: string,
    label: string,
    placeholder?: string,
    rules?: RuleExpression<string>,
  }>();

  const { name, rules } = toRefs(props);

  const { value, handleChange, errorMessage } = useField(name, rules);
</script>

<style scoped lang="scss">
  .textarea {

  }

  .label {
    display: block;
    width: 100%;
  }

  .input {
    display: block;
    width: 100%;
    min-height: 150px;
    resize: none;
    outline: none;
    @apply tw-bg-neutral tw-rounded-xl tw-text-body-m-bold tw-p-16 -tw-tracking-2;

    &::placeholder {
      @apply tw-text-body-m-bold tw-text-text02 -tw-tracking-2;
    }
  }

  .error {
    @apply tw-text-body-s-regular tw-text-red tw-mt-4;
  }
</style>
