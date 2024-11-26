<template>
  <div>
    <p v-if="elements.length === 0">Нет ни одного блюда</p>
    <template v-else>
      <MenuItem
        class="tw-mb-16"
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
