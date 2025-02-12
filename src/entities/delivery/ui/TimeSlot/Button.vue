<template>
  <div>
    <div class="time-btn" :class="{ 'time-btn--error': !!errorMessage }" v-bind="$attrs">
      <div class="body">
        <div class="label">{{ label }}</div>
        <div class="value">
          {{ timeslot ? timeslot : 'Укажите время' }}
        </div>
      </div>
      <AppButton :design="errorMessage ? 'primary' : 'outline'" size="36" @click="showed = true">Изменить время</AppButton>
    </div>
    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
  </div>
  <TimeSlotModal
    :label="modalLabel"
    :workBefore="workBefore"
    :date="date"
    v-model="showed"
    v-model:timeslot="timeslot"
    @update:timeslot="showed = false"
  />
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue';
  import TimeSlotModal from './Modal.vue';
  import { useField, type RuleExpression } from 'vee-validate';

  defineOptions({
    inheritAttrs: false,
  });

  const props = defineProps<{
    label: string,
    modalLabel: string,
    workBefore: number,
    rules?: RuleExpression<string>,
    date: string,
  }>();

  const timeslot = defineModel({ default: '' });

  const showed = ref(false);

  const { errorMessage, handleChange } = useField('timeline', props.rules, { initialValue: timeslot.value });

  watch(timeslot, (v) => {
    handleChange(v);
  });
</script>

<style scoped lang="scss">
  .time-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    @apply tw-bg-neutral tw-py-12 tw-px-16 tw-rounded-xl tw-border tw-border-solid tw-border-neutral;

    &--error {
      border-color: theme('colors.red') !important;
      background-color: theme('colors.red-10%') !important;

      .label {
        @apply tw-text-red;
      }
    }
  }

  .error {
    @apply tw-text-body-s-regular tw-text-red tw-mt-4;
  }

  .label {
    margin-bottom: 2px;
    @apply tw-text-text01 -tw-tracking-2 tw-text-body-m-bold;
  }

  .value {
    @apply tw-text-body-l-bold -tw-tracking-2;
  }

  .body {
    flex-grow: 1;
  }
</style>
