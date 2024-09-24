<template>
  <div>
    <AppTabs
      class="type"
      :items="[ 'Доставка', 'Самовывоз' ]"
      :activeIndex="value === '1' ? 0 : 1"
      @update:activeIndex="onUpdateType"
    />
    <PickupLocation v-if="value === '2'" />
    <template v-else>
      <AppInput name="address" label="Адрес" :rules="schema.address" />
      <ToggleInput
        class="tw-mt-12"
        name="private_home"
        label="Частный дом"
        checkedValue="Да"
        uncheckedValue="Нет"
      />
      <div class="house-inps">
        <AppInput class="house-inp" name="flat" :rules="schema.flat" label="Квартира" />
        <AppInput class="house-inp" name="entrance" label="Подъезд" :rules="schema.entrance" />
        <AppInput class="house-inp" name="floor" label="Этаж" :rules="schema.floor" />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
  import PickupLocation from '../PickupLocation/index.vue';
  import { useField, type RuleExpression } from 'vee-validate';

  interface Schema {
    address: RuleExpression<string>,
    flat: RuleExpression<string>,
    entrance: RuleExpression<string>,
    floor: RuleExpression<string>,
  }

  defineProps<{ schema: Schema }>();

  const { value, handleChange } = useField('type_delivery');

  function onUpdateType(index: number) {
    handleChange(`${index + 1}`);
  }
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
