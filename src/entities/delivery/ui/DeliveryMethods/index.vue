<template>
  <div>
    <div class="tabs-wrap">
      <AppTabs
        :items="[ 'Доставка', 'Самовывоз' ]"
        :activeIndex="form.type_delivery === '1' ? 0 : 1"
        @update:activeIndex="form.type_delivery = ($event + 1).toString()"
      />
      <LocationInput v-model="form.location" />
    </div>

    <template v-if="form.type_delivery === '2'">
      <PickupLocation  />
      <TimeSlotButton
        class="tw-mt-32"
        label="Заберу еду"
        modalLabel="Время получения заказа"
        :workBefore="20"
        :rules="schema.timeline"
        v-model="form.timeline"
      />
    </template>
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
      <div class="house-inps" v-if="form.private_home === 'Нет'">
        <AppInput class="tw-grow" name="flat" :rules="schema.flat" label="Квартира" v-model="form.flat" />
        <AppInput class="tw-grow" name="entrance" label="Подъезд" :rules="schema.entrance" v-model="form.entrance" />
        <AppInput class="tw-grow" name="floor" label="Этаж" :rules="schema.floor" v-model="form.floor" />
      </div>
      <TimeSlotButton
        class="tw-mt-32"
        label="Доставим"
        :workBefore="23"
        modalLabel="Время доставки"
        :rules="schema.timeline"
        v-model="form.timeline"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
  import LocationInput from '../LocationInput.vue';
  import PickupLocation from '../PickupLocation/index.vue';
  import TimeSlotButton from '../TimeSlot/Button.vue';
  import { type RuleExpression } from 'vee-validate';

  interface Schema {
    address: RuleExpression<string>,
    flat: RuleExpression<string>,
    entrance: RuleExpression<string>,
    floor: RuleExpression<string>,
    timeline: RuleExpression<string>,
  }

  interface Form {
    address: string,
    flat: string,
    entrance: string,
    floor: string,
    private_home: string,
    type_delivery: string,
    timeline: string,
    location: '3' | '4',
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

  .tabs-wrap  {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    column-gap: 30px;
    row-gap: 16px;
    @apply tw-mb-16;
  }
</style>
