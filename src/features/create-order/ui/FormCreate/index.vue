<template>
  <Form :initialValues="form" @submit="onSubmit" v-slot="{ isSubmitting }">
    <fieldset class="fieldset">
      <legend class="legend">Личные данные</legend>
      <AppInput class="inp-el" name="name" label="Имя" :rules="schema.name" />
      <PhoneInput class="inp-el" :rules="schema.phone" />
      <ToggleInput
        class="tw-mt-12"
        label="Нужен звонок для подтверждения заказа"
        name="need_call"
        checkedValue="Да"
        uncheckedValue="Нет"
      />
      <DeliveryMethods class="tw-mt-32" :schema="schema" />
    </fieldset>
    <fieldset class="fieldset">
      <legend class="legend">Способ оплаты</legend>
      <PaymentMethods :schema="schema" />
    </fieldset>
    <AppTextarea
      class="area tw-mt-32"
      name="comment"
      label="Комментарий"
      placeholder="Пожелание к заказу, например: оставить заказ у двери, бесконтактная оплата"
      :rules="schema.comment"
    />
    <AppButton class="tw-mt-24 tw-w-full" type="submit" design="primary" size="56" :disabled="isSubmitting">
      Оформить заказ
    </AppButton>
  </Form>
</template>

<script setup lang="ts">
  import useCreateForm, { type OrderForm } from '../../model/useCreateForm';
  import { DeliveryMethods } from '@/entities/delivery';
  import { PaymentMethods } from '@/entities/payment';
  import { useAlertsStore } from '@/shared/store/alerts';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const { form, schema, createOrder } = useCreateForm();

  async function onSubmit(form: unknown) {
    createOrder(form as OrderForm, () => {
      router.push({ name: 'home' });
      useAlertsStore().create({
        title: 'Заказ успешно оформлен',
        icon: 'check-regular',
      });
    });
  }
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
