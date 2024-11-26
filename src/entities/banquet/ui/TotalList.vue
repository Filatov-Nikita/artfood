<template>
  <div class="section-list">
    <template
      v-for="row in data"
    >
      <div class="section-name" v-if="row[0].type === 'section'">
        {{ row[0].name }}
      </div>
      <div class="items" v-else>
        <template
          v-for="item in row"
        >
          <div class="item" v-if="item.type === 'item'">
            <p class="item__name">
              {{ item.name }}
            </p>
            <p class="item__ves">{{ item.ves }} г</p>
            <p class="item__price">{{ $amount(item.price) }}</p>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
  import type { Total, TotalSection, TotalItem } from '@/shared/repositories/banquet';
  import { computed } from 'vue';

  type Items = ([ TotalSection & { type: 'section' } ] | (TotalItem & { type: 'item' })[])[];

  const props = defineProps<{
    total: Total,
  }>();

  const data = computed(() => {
    const items: Items = [];
    props.total.forEach((item, i) => {
      if(isSection(item, i)) items.push([ { ...item[0], type: 'section' } ]);
      else if(isItems(item, i)) {
        items.push(
          item.map(product => ({ ...product, type: 'item' })),
        );
      };
    });
    return items;
  });

  function isSection(item: unknown, i: number): item is TotalSection {
    return i % 2 === 0;
  }

  function isItems(items: unknown, i: number): items is TotalItem[] {
    return i % 2 !== 0;
  }
</script>

<style scoped lang="scss">
  .section-name {
    @apply tw-text-body-l-bold -tw-tracking-2 tw-mb-8;
  }

  .items {
    @apply tw-mb-24;
  }

  .item {
    @apply tw-py-8 tw-border-b tw-border-solid tw-border-border01;

    &__name {
      margin-bottom: 2px;
      @apply tw-text-body-s-medium;
    }

    &__ves {
      @apply tw-text-text02 tw-text-body-xs-regular tw-mb-8;
    }

    &__price {
      @apply tw-text-body-m-bold -tw-tracking-2;
    }
  }
</style>
