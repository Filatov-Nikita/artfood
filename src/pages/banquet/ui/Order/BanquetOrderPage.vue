<template>
  <div>
    <FormCreate
      :form="form"
      :schema="schema"
      @init="formRef = $event"
    />
    <AppButton
      class="tw-mt-32"
      size="48"
      :disabled="loading"
      @click="submit"
    >
      Оформить заказ
    </AppButton>
  </div>
</template>

<script setup lang="ts">
  import { inject } from 'vue';
  import { setTitleKey } from '@/layouts/Banquet/model/symbols';
  import { FormCreate, useCreateForm } from '@/features/create-banquet';
  import { useRepositories } from '@/shared/repositories';
  import usePostRequest from '@/shared/lib/usePostRequest';
  import { useBanquetStore } from '@/shared/store/banquet';
  import { useAlertsStore } from '@/shared/store/alerts';
  import { useRouter } from 'vue-router';
  import useSubmit from '@/shared/lib/useSubmit';

  const setTitle = inject(setTitleKey);
  setTitle && setTitle('Формирование заявки');

  const router = useRouter();
  const alertsStore = useAlertsStore();

  const api = useRepositories();

  const { form, schema } = useCreateForm();

  const banquetStore = useBanquetStore();

  const { loading, send } = usePostRequest(
    api.banquet.createOrder,
    () => {
      return {
        ...form,
        basket_id: banquetStore.basketId!
      }
    },
    () => {
      router.push({ name: 'home' });
      banquetStore.clearBasket();
      alertsStore.create({
        title: 'Банкетное меню успешно создано',
        text: 'Менеджер свяжется с вами для уточнения деталей в течении 10 минут',
        icon: 'check-regular',
      });
    },
  );

  const { formRef, submit } = useSubmit(send);
</script>
