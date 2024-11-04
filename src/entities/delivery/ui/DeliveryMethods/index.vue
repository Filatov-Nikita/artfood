<template>
  <div>
    <AppTabs
      class="type"
      :items="[ 'Доставка', 'Самовывоз' ]"
      :activeIndex="form.type_delivery === '1' ? 0 : 1"
      @update:activeIndex="form.type_delivery = ($event + 1).toString()"
    />
    <PickupLocation v-if="form.type_delivery === '2'" />
    <template v-else>
      <AppInput name="address" label="Адрес" :rules="schema.address" v-model="form.address" />
      <ToggleInput
        class="tw-mt-12"
        name="private_home"
        label="Частный дом"
        checkedValue="Да"
        uncheckedValue="Нет"
        v-model="form.private_home"
      />
      <div class="house-inps">
        <AppInput class="house-inp" name="flat" :rules="schema.flat" label="Квартира" v-model="form.flat" />
        <AppInput class="house-inp" name="entrance" label="Подъезд" :rules="schema.entrance" v-model="form.entrance" />
        <AppInput class="house-inp" name="floor" label="Этаж" :rules="schema.floor" v-model="form.floor" />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
  import PickupLocation from '../PickupLocation/index.vue';
  import { type RuleExpression } from 'vee-validate';

  interface Schema {
    address: RuleExpression<string>,
    flat: RuleExpression<string>,
    entrance: RuleExpression<string>,
    floor: RuleExpression<string>,
  }

  interface Form {
    address: string,
    flat: string,
    entrance: string,
    floor: string,
    private_home: string,
    type_delivery: string,
  }

  defineProps<{ schema: Schema, form: Form }>();
</script>


<style scoped lang="scss">
  .type {
    @apply tw-mb-16;
  }

  .house-inps {
    margin-top: 16px;
    display: flex;
    gap: 8px;
  }

  .house-inp {
    flex-grow: 1;
  }
</style>
