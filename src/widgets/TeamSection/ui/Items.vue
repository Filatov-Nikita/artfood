<template>
  <div v-if="items && items[0]" class="items">
    <Item
      class="team-item"
      :title="`${items[0].let} лет`"
      text="на рынке"
    />
    <Item
      class="team-item"
      :title="`${items[0].meropr} мероприятий`"
      text="провели"
    />
    <Item
      class="team-item"
      :title="`${items[0].dostavok} доставок`"
      text="фуршетов"
    />
    <Item
      class="team-item"
      :title="`${items[0].person} персон`"
      text="обслужили одновременно"
    />
  </div>
</template>

<script setup lang="ts">
  import useDataOrAlert from '@/shared/lib/useDataOrAlert';
  import Item from './Item.vue';
  import { useRepositories } from '@/shared/repositories';
  import useRequest from '@/shared/lib/useRequest';

  const api = useRepositories();

  const res = await useRequest(api.company.counter);

  const { data: items } = useDataOrAlert(res);
</script>

<style scoped lang="scss">
  .items {
    display: flex;
    flex-wrap: wrap;
    margin: -6px;

    @include lg {
      margin: -10px;
    }
  }

  .team-item {
    margin: 6px;
    width: calc(100% - 12px);

    @include lg {
      margin: 10px;
      width: calc(50% - 20px);
    }

    @include xl {
      width: calc(25% - 20px);
    }
  }
</style>
