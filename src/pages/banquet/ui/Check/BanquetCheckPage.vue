<template>
  <div>
    <TotalList :total="total" />
  </div>
</template>

<script setup lang="ts">
  import { inject } from 'vue';
  import { setTitleKey } from '@/layouts/Banquet/model/symbols';
  import { useRepositories } from '@/shared/repositories';
  import { useBanquetStore } from '@/shared/store/banquet';
  import useDataOrFail from '@/shared/lib/useDataOrFail';
  import useRequest from '@/shared/lib/useRequest';
  import { TotalList } from '@/entities/banquet';

  const setTitle = inject(setTitleKey);
  setTitle && setTitle('Проверка банкетного меню');

  const api = useRepositories();
  const banquetStore = useBanquetStore();

  const totalRes = await useRequest(() => api.banquet.showTotal(banquetStore.basketId!));

  const total = useDataOrFail(totalRes);
</script>
