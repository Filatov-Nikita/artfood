<template>
  <div :class="{ 'check--pb': !grid.lg }">
    <div class="wrap">
      <TotalList class="table" :total="total" />
      <MiniBasket class="sum" v-if="grid.lg">
        <template #actions>
          <div class="actions">
            <ButtonRound theme="white" padding="0.25em" icon="caret-left-regular" size="48px" @click="$router.replace({ name: 'banquet.menu' })" />
            <ButtonRound theme="white" padding="0.25em" icon="printer-regular" size="48px" @click="printMenu" />
            <AppButton class="tw-grow" size="48" :to="{ name: 'banquet.order' }">Далее</AppButton>
          </div>
        </template>
      </MiniBasket>
    </div>
    <MiniBasketFixed v-if="!grid.lg" full hideChangePersons @change:height="miniBasketHeight = $event">
      <template #actions>
        <div class="actions">
          <ButtonRound theme="neutral" padding="0.25em" icon="caret-left-regular" size="48px" @click="$router.replace({ name: 'banquet.menu' })" />
          <ButtonRound theme="neutral" padding="0.25em" icon="printer-regular" size="48px" @click="printMenu" />
          <AppButton class="tw-grow" size="48" :to="{ name: 'banquet.order' }">Далее</AppButton>
        </div>
      </template>
    </MiniBasketFixed>
  </div>
</template>

<script setup lang="ts">
  import { inject, ref } from 'vue';
  import { setTitleKey } from '@/layouts/Banquet/model/symbols';
  import { useRepositories } from '@/shared/repositories';
  import { useBanquetStore } from '@/shared/store/banquet';
  import useDataOrFail from '@/shared/lib/useDataOrFail';
  import useRequest from '@/shared/lib/useRequest';
  import { TotalList, MiniBasketFixed, MiniBasket } from '@/entities/banquet';
  import { useAppGrid } from '@/shared/lib/useScreen';

  const setTitle = inject(setTitleKey);
  setTitle && setTitle('Проверка банкетного меню');

  const grid = useAppGrid();

  const api = useRepositories();
  const banquetStore = useBanquetStore();

  const totalRes = await useRequest(() => api.banquet.showTotal(banquetStore.basketId!));

  const total = useDataOrFail(totalRes);

  const miniBasketHeight = ref('0px');

  function printMenu() {
    window.print();
  };
</script>

<style scoped lang="scss">
  .check {
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

  .wrap {
    @include lg {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      column-gap: 20px;
    }

    @include xl {
      column-gap: 100px;
    }
  }

  .table {
    @include lg {
      width: calc(100% - 312px - 20px);
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
