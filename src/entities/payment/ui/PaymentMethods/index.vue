<template>
  <div class="items">
    <RadioItem class="item" name="type_of_payment" checkedValue="5" label="Картой при получении" icon="credit-card-regular" v-model="form.type_of_payment" />
    <RadioItem class="item" name="type_of_payment" checkedValue="6" label="Наличными" icon="coins-regular" v-model="form.type_of_payment" />
    <template v-if="form.type_of_payment === '6'">
      <ToggleInput class="tw-mt-12" name="meta.need_sdacha" label="Нужна сдача" v-model="form.meta.need_sdacha" />
      <AppInput class="tw-mt-16" v-if="form.meta.need_sdacha" :rules="schema.sdacha" name="sdacha" label="С какой суммы" v-model="form.sdacha" />
    </template>
  </div>
</template>

<script setup lang="ts">
  import { type RuleExpression } from 'vee-validate';
  import RadioItem from './RadioItem.vue';

  interface Schema {
    sdacha: RuleExpression<string>,
  }

  interface Form {
    type_of_payment: string,
    sdacha: string,
    meta: {
      need_sdacha: string,
    }
  }

  defineProps<{
    schema: Schema,
    form: Form,
  }>();
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
