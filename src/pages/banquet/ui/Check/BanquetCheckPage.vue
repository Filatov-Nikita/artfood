<template>
  <div class="check">
    <TotalList :total="total" />
    <MiniBasketFixed full hideChangePersons @change:height="miniBasketHeight = $event">
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
  import { TotalList, MiniBasketFixed } from '@/entities/banquet';

  const setTitle = inject(setTitleKey);
  setTitle && setTitle('Проверка банкетного меню');

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
    padding-bottom: v-bind(miniBasketHeight);
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 8px;
    @apply tw-mt-16;
  }
</style>
