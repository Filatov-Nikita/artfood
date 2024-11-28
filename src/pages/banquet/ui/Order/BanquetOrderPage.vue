<template>
  <div :class="{ 'order--pb': !grid.lg }">
    <div class="wrap">
      <FormCreate
        class="form"
        :form="form"
        :schema="schema"
        @init="formRef = $event"
      />
      <MiniBasket class="sum" v-if="grid.lg">
        <template #actions>
          <div class="actions">
            <ButtonRound class="tw-shrink-0" theme="white" padding="0.25em" icon="caret-left-regular" size="48px" @click="$router.replace({ name: 'banquet.check' })" />
            <AppButton
              class="tw-grow"
              size="48"
              :disabled="loading"
              @click="submit"
            >
              Оформить заказ
            </AppButton>
          </div>
          <p class="policy">
            Отправляя форму вы соглашаетесь на <a :href="percHref" target="_blank">обработку персональных данных</a> и с условиями <a :href="polzSoglHref" target="_blank">пользовательского соглашения</a>.
          </p>
        </template>
      </MiniBasket>
    </div>
    <MiniBasketFixed v-if="!grid.lg" hideChangePersons @change:height="miniBasketHeight = $event">
      <template #actions>
        <div class="actions">
          <ButtonRound class="tw-shrink-0" theme="neutral" padding="0.25em" icon="caret-left-regular" size="48px" @click="$router.replace({ name: 'banquet.check' })" />
          <AppButton
            class="tw-grow"
            size="48"
            :disabled="loading"
            @click="submit"
          >
            Оформить заказ
          </AppButton>
        </div>
        <p class="policy">
          Отправляя форму вы соглашаетесь на <a :href="percHref" target="_blank">обработку персональных данных</a> и с условиями <a :href="polzSoglHref" target="_blank">пользовательского соглашения</a>.
        </p>
      </template>
    </MiniBasketFixed>
  </div>
</template>

<script setup lang="ts">
  import { inject, ref } from 'vue';
  import { setTitleKey } from '@/layouts/Banquet/model/symbols';
  import { FormCreate, useCreateForm } from '@/features/create-banquet';
  import { useRepositories } from '@/shared/repositories';
  import usePostRequest from '@/shared/lib/usePostRequest';
  import { useBanquetStore } from '@/shared/store/banquet';
  import { useAlertsStore } from '@/shared/store/alerts';
  import { useRouter } from 'vue-router';
  import { MiniBasketFixed, MiniBasket } from '@/entities/banquet';
  import useSubmit from '@/shared/lib/useSubmit';
  import { useAppConfig } from '@/shared/config/app';
  import { useAppGrid } from '@/shared/lib/useScreen';

  const setTitle = inject(setTitleKey);
  setTitle && setTitle('Формирование заявки');

  const grid = useAppGrid();
  const miniBasketHeight = ref('0px');
  const { polzSoglHref, percHref } = useAppConfig();

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

<style scoped lang="scss">
  .order {
    &--pb {
      padding-bottom: v-bind(miniBasketHeight);
    }
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 8px;
    @apply tw-mt-16;

    @include lg {
      @apply tw-pt-16 tw-border-t tw-border-solid tw-border-border01;
    }
  }

  .policy {
    @apply tw-text-text01 -tw-tracking-2 tw-text-body-xs-medium tw-mt-8;

    @include lg {
      @apply tw-mt-16 tw-text-body-s-medium;
    }

    a {
      @apply tw-text-primary tw-text-body-xs-bold;

      @include lg {
        @apply tw-text-body-s-bold;
      }

      &:hover {
        @apply tw-text-primary-hover;
      }

      &:active {
        @apply tw-text-primary-press;
      }
    }
  }

  .wrap {
    @include lg {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      column-gap: 80px;
    }

    @include xl {
      column-gap: 100px;
    }
  }

  .form {
    @include lg {
      width: calc(100% - 312px - 80px);
    }

    @include xl {
      width: calc(100% - 440px - 100px);
    }
  }

  .sum {
    @include lg {
      width: 100%;
      max-width: 312px;
    }

    @include xl {
      max-width: 440px;
    }
  }
</style>
