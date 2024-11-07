<template>
  <div class="items">
    <StaffItem
      class="staff-item"
      v-for="item in items"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script setup lang="ts">
  import StaffItem from './Item.vue';
  import type { CompanyTeamItem } from '@/shared/repositories/company';

  defineProps<{
    items: CompanyTeamItem[],
  }>();
</script>

<style scoped lang="scss">
  .items {
    display: flex;
    flex-wrap: wrap;
    margin: -12px;

    @include lg {
      margin: -10px;
    }
  }

  .staff-item {
    width: calc(100% - 24px);
    margin: 12px;

    @include lg {
      margin: 10px;
      width: calc(33.3% - 20px);
    }
  }
</style>
