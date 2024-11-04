<template>
  <main class="page--py order-page">
    <div class="wrapper">
      <div class="order-form-wrap">
        <FormCreate class="order-form" :form="form" :schema="schema" @init="formRef = $event" />
        <TotalCalcDesktop v-if="grid.lg" class="total">
          <template #actions>
            <AppButton class="tw-mt-16 tw-w-full" type="submit" design="primary" size="48" :disabled="loading" @click="submit">
              Оформить заказ
            </AppButton>
          </template>
        </TotalCalcDesktop>
      </div>
      <div class="actions-sm" v-if="!grid.lg">
        <BlockTotal v-if="basketStore.basket.length > 0" :basket="basketStore.basket" />
        <AppButton class="tw-mt-16 tw-w-full" type="submit" design="primary" size="48" :disabled="loading" @click="submit">
          Оформить заказ
        </AppButton>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
  import { FormCreate } from '@/features/create-order';
  import BlockTotal from '@/entities/basket/ui/ModalDetailed/BlockTotal.vue';
  import { useBasketStore } from '@/shared/store/basket';
  import { useAppGrid } from '@/shared/lib/useScreen';
  import TotalCalcDesktop from './TotalCalcDesktop.vue';
  import usePostRequest from '@/shared/lib/usePostRequest';
  import { useCreateForm } from '@/features/create-order';
  import { useRepositories } from '@/shared/repositories';
  import { useAlertsStore } from '@/shared/store/alerts';
  import { useRouter } from 'vue-router';
  import useSubmit from '@/shared/lib/useSubmit';

  const router = useRouter();
  const alertsStore = useAlertsStore();

  const basketStore = useBasketStore();

  const grid = useAppGrid();

  const api = useRepositories();

  const { form, schema } = useCreateForm();

  const { loading, send } = usePostRequest(
    api.orders.create,
    () => {
      const body = {
        ...form, basket_id: basketStore.basketId!, meta: undefined, timeline: '10:00 - 10:30',
      };
      delete body['meta'];
      return body;
    },
    () => {
      router.push({ name: 'home' });
      basketStore.clearAll();
      alertsStore.create({
        title: 'Заказ успешно оформлен',
        icon: 'check-regular',
      });
    }
  );

  const { formRef, submit } = useSubmit(send);
</script>

<style scoped lang="scss">
  .actions-sm {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    @apply tw-bg-white tw-p-16 tw-pt-0;
  }

  .order-page {
    padding-bottom: 186px;

    @include lg {
      padding-bottom: 64px;
    }
  }

  .order-form-wrap {
    @include lg {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      column-gap: 100px;
    }

    @include xl {
      column-gap: 135px;
    }
  }

  .order-form {
    width: 100%;

    @include lg {
      max-width: 560px;
    }

    @include xl {
      max-width: 785px;
    }
  }

  .total {
    flex-grow: 1;
  }
</style>
