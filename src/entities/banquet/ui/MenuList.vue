<template>
  <div :class="{ 'menu-list': elements.length > 0 }">
    <p v-if="elements.length === 0" class="empty">Нет ни одного блюда</p>
    <template v-else>
      <MenuItem
        class="item"
        v-for="element in elements"
        :key="element.id"
        :item="element"
      >
        <template #action="{ count }">
          <ButtonMinMax
            :productId="element.id"
            :price="element.price"
            :count="count"
            @reduce="banquetStore.reduceElement"
            @append="banquetStore.appendElement"
          />
        </template>
      </MenuItem>
    </template>
  </div>
</template>

<script setup lang="ts">
  import MenuItem from './MenuItem.vue';
  import type { Element } from '@/shared/repositories/banquet';
  import { ButtonMinMax } from '@/shared/ui';
  import { useBanquetStore } from '@/shared/store/banquet';

  defineProps<{
    elements: Element[],
  }>();

  const banquetStore = useBanquetStore();
</script>

<style scoped lang="scss">
  .menu-list {
    display: flex;
    flex-wrap: wrap;
    margin: -20px -10px;
  }

  .item {
    margin: 20px 10px;
    width: 100%;

    @include lg {
      width: calc(50% - 20px);
    }

    @include xl {
      width: calc(33.3% - 20px);
    }
  }

  .empty {
    @apply tw-text-body-m-medium;
  }
</style>
