<template>
  <div class="items">
    <RadioItem class="item" name="type_of_payment" checkedValue="5" label="Картой при получении" icon="credit-card-regular" />
    <RadioItem class="item" name="type_of_payment" checkedValue="6" label="Наличными" icon="coins-regular" />
    <template v-if="type === '6'">
      <ToggleInput class="tw-mt-12" name="meta.need_sdacha" label="Нужна сдача" />
      <AppInput class="tw-mt-16" v-if="showedSum" :rules="schema.sdacha" name="sdacha" label="С какой суммы" />
    </template>
  </div>
</template>

<script setup lang="ts">
  import { useFieldValue, type RuleExpression } from 'vee-validate';
  import RadioItem from './RadioItem.vue';

  interface Schema {
    sdacha: RuleExpression<string>,
  }

  defineProps<{
    schema: Schema,
  }>();

  const type = useFieldValue('type_of_payment');
  const showedSum = useFieldValue('meta.need_sdacha');
</script>

<style scoped lang="scss">
  .items {

  }

  .item {
    width: 100%;
    border-radius: 16px;

    & + & {
      margin-top: 8px;
    }

    &.size-56 {
      padding-top: 16px;
      padding-bottom: 16px;
    }

    &:deep(.label) {
      flex-grow: 1;
      text-align: left
    }

    &:deep(.left-icon) {
      color: theme('colors.primary') !important;
    }
  }
</style>
