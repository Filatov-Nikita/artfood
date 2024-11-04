<template>
  <Form ref="formRef">
    <fieldset class="fieldset">
      <legend class="legend">Личные данные</legend>
      <AppInput class="inp-el" name="name" label="Имя" :rules="schema.name" v-model="form.name" />
      <PhoneInput class="inp-el" :rules="schema.phone" v-model="form.phone" />
      <ToggleInput
        class="tw-mt-12"
        label="Нужен звонок для подтверждения заказа"
        name="need_call"
        checkedValue="Да"
        uncheckedValue="Нет"
        v-model="form.need_call"
      />
      <DeliveryMethods class="tw-mt-32" :schema="schema" :form="form" />
    </fieldset>
    <fieldset class="fieldset">
      <legend class="legend">Способ оплаты</legend>
      <PaymentMethods :schema="schema" :form="form" />
    </fieldset>
    <AppTextarea
      class="area tw-mt-32"
      name="comment"
      label="Комментарий"
      placeholder="Пожелание к заказу, например: оставить заказ у двери, бесконтактная оплата"
      :rules="schema.comment"
      v-model="form.comment"
    />
  </Form>
</template>

<script setup lang="ts">
  import { DeliveryMethods } from '@/entities/delivery';
  import { PaymentMethods } from '@/entities/payment';
  import { useCreateForm } from '@/features/create-order';
  import { onMounted, ref } from 'vue';
  import { Form } from 'vee-validate';

  defineProps<{
    form: ReturnType<typeof useCreateForm>['form'],
    schema: ReturnType<typeof useCreateForm>['schema'],
  }>();

  const emit = defineEmits<{
    (event: 'init', formRef: InstanceType<typeof Form> | null): void,
  }>();

  const formRef = ref<InstanceType<typeof Form> | null>(null);

  onMounted(() => {
    emit('init', formRef.value);
  });
</script>


<style scoped lang="scss">
  .fieldset {
    & + & {
      @apply tw-mt-32;
    }
  }

  .legend, .area :deep(.label) {
    @apply tw-text-body-l-bold -tw-tracking-2 tw-mb-16;
  }

  .inp-el {
    & + & {
      @apply tw-mt-8;
    }
  }
</style>
