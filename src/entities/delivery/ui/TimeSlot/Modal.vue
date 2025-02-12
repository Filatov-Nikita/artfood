<template>
  <AppModal v-model="value" x-pos="right" y-pos="bottom" animation="slide-right">
    <div class="card-wrap">
      <div class="card">
        <div class="title-wrap">
          <p class="title">{{ label }}</p>
          <div class="card-top-actions">
            <ButtonClose class="tw-shrink-0" size="40px" padding="0.2em" @click="value = false" />
          </div>
        </div>
        <div v-if="slots.length === 0">
          <p class="tw-mb-4">На сегодня нет доступного времени.</p>
        </div>
        <div v-else>
          <RadioItem
            v-for="slot in slots"
            name="timeline_temp"
            :checkedValue="slot"
            :label="`${slot}, ${getLabel()}`"
            :rules="rules"
            v-model="timeslot"
          />
        </div>
      </div>
    </div>
  </AppModal>
</template>

<script setup lang="ts">
  import { watch, ref } from 'vue';
  import RadioItem from './Radio.vue';
  import { type RuleExpression } from 'vee-validate';

  const props = defineProps<{
    label: string,
    workBefore: number,
    rules?: RuleExpression<string>,
    date: string,
  }>();

  const value = defineModel({ default: false });
  const timeslot = defineModel('timeslot', { default: '' });

  let curDate = new Date();
  let startDate = start();
  const slots = ref(slotsList());

  function getLabel() {
    return isToday() ?
      'сегодня' :
      startDate.toLocaleDateString(
        'ru-RU',
        { day: 'numeric', month: 'long' }
      );
  }

  function slotsList() {
    return getSlots(
      startDate.getHours(),
      startDate.getMinutes(),
      props.workBefore,
      () => curDate.getHours() >= props.workBefore || curDate.getHours() < 10,
    );
  }

  function start() {
    if(isToday()) return getStartDate();
    const dt = new Date(getIsoDate());
    curDate.setHours(11);
    curDate.setMinutes(0);
    dt.setHours(11);
    dt.setMinutes(0);
    return dt;
  }

  function isToday() {
    return getIsoCur() === getIsoDate();
  }

  function getIsoDate() {
    return props.date.split('.').reverse().join('-');
  }

  function getIsoCur() {
    const iso = curDate.toISOString();
    return iso.substring(0, iso.indexOf('T'));
  }

  function getStartDate() {
    const date = new Date();
    date.setHours(date.getHours() + 1);
    const minutes = date.getMinutes();
    if(minutes <= 20) {
      date.setMinutes(0);
    } else if(minutes > 20 && minutes <= 40) {
      date.setMinutes(30);
    } else {
      date.setMinutes(60);
    }
    return date;
  }

  function getSlots(hours: number, minutes: number, workBefore: number, isEmpty: () => boolean) {
    if(isEmpty()) return [];

    const list: string[] = [];

    while(hours < workBefore) {
      if(minutes === 0) {
        list.push(`${hours}:00 - ${hours}:${30}`);
        minutes += 30;
      } else if(minutes === 30) {
        list.push(`${hours}:30 - ${hours + 1}:00`);
        hours++;
        minutes = 0;
      } else {
        hours++;
      }
    }

    return list;
  }

  watch(value, (val) => {
    if(val) {
      curDate = new Date();
      startDate = start();
      slots.value = slotsList();
    }
  });
</script>

<style scoped lang="scss">
  .card-wrap {
    position: relative;
    @apply tw-w-full tw-h-full tw-rounded-1.5xl;

    @include lg {
      max-width: 464px;
    }
  }

  .card {
    overflow: auto;
    @apply tw-rounded-1.5xl tw-bg-white tw-p-24 tw-w-full tw-h-full;
  }

  .title {
    @apply tw-text-body-l-bold -tw-tracking-2;
  }

  .title-wrap {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    @apply tw-mb-24;
  }
</style>
