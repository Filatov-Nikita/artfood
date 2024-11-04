<template>
  <div>
    <AppTabs
      class="tw-mb-16"
      :items="[ 'Доставка', 'Самовывоз' ]"
      :activeIndex="form.type_delivery === '1' ? 0 : 1"
      @update:activeIndex="form.type_delivery = ($event + 1).toString()"
    />
    <PickupLocation v-if="form.type_delivery === '2'" />
    <template v-else>
      <AppInput class="tw-mb-12" name="address" label="Адрес" :rules="schema.address" v-model="form.address" />
      <ToggleInput
        class="tw-mb-16"
        name="private_home"
        label="Частный дом"
        checkedValue="Да"
        uncheckedValue="Нет"
        v-model="form.private_home"
      />
      <div class="house-inps">
        <AppInput class="tw-grow" name="flat" :rules="schema.flat" label="Квартира" v-model="form.flat" />
        <AppInput class="tw-grow" name="entrance" label="Подъезд" :rules="schema.entrance" v-model="form.entrance" />
        <AppInput class="tw-grow" name="floor" label="Этаж" :rules="schema.floor" v-model="form.floor" />
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
  .house-inps {
    display: flex;
    gap: 8px;

    @include lg {
      gap: 20px;
    }
  }
</style>
