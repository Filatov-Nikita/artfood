<template>
  <Form ref="formRef">
    <fieldset class="tw-mb-32">
      <legend class="legend">Личные данные</legend>
      <div class="name-wrap">
        <AppInput class="tw-w-full" name="name" label="Имя" :rules="schema.name" v-model="form.name" />
        <PhoneInput class="tw-w-full" :rules="schema.phone" v-model="form.phone" />
      </div>
      <ToggleInput
        class="tw-mb-32"
        label="Нужен звонок для подтверждения заказа"
        name="need_call"
        checkedValue="Да"
        uncheckedValue="Нет"
        v-model="form.need_call"
      />
      <DeliveryMethods :schema="schema" :form="form" />
    </fieldset>
    <fieldset class="tw-mb-32">
      <legend class="legend">Способ оплаты</legend>
      <PaymentMethods :schema="schema" :form="form" />
    </fieldset>
    <AppTextarea
      class="area"
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
  .legend, .area :deep(.label) {
    @apply tw-text-body-l-bold -tw-tracking-2 tw-mb-16;
  }

  .name-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    @apply tw-mb-12;

    @include lg {
      flex-wrap: nowrap;
      gap: 20px;
    }
  }
</style>
