<template>
  <div class="section-list">
    <template
      v-for="row in data"
    >
      <div class="section-name" v-if="row[0].type === 'section'">
        {{ row[0].name }}
      </div>
      <div class="items" v-else>
        <div class="head" v-if="grid.lg">
          <p>Блюдо</p>
          <p>Вес, г</p>
          <p>Цена</p>
        </div>
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
  import { useAppGrid } from '@/shared/lib/useScreen';

  type Items = ([ TotalSection & { type: 'section' } ] | (TotalItem & { type: 'item' })[])[];

  const props = defineProps<{
    total: Total,
  }>();

  const grid = useAppGrid();

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

    @include lg {
      @apply tw-text-heading-3-bold tw-mb-12;
    }
  }

  .items {
    @apply tw-mb-24;

    @include lg {
      @apply tw-mb-40;
    }
  }

  .item {
    @apply tw-py-8 tw-border-b tw-border-solid tw-border-border01;

    &__name {
      margin-bottom: 2px;
      @apply tw-text-body-s-medium;

      @include lg {
        @apply tw-text-body-m-regular tw-mb-0;
      }
    }

    &__ves {
      @apply tw-text-text02 tw-text-body-xs-regular tw-mb-8;

      @include lg {
        @apply tw-text-body-m-regular tw-text-text00 tw-mb-0;
      }
    }

    &__price {
      @apply tw-text-body-m-bold -tw-tracking-2;

      @include lg {
        @apply tw-text-body-m-regular;
      }
    }
  }

  .head, .item {
    @include lg {
      display: grid;
      grid-template-columns: 1fr 88px 88px;
      column-gap: 20px;
      @apply tw-py-16;
    }
  }

  .head {
    @include lg {
      @apply tw-text-text01 tw-text-body-m-regular tw-border-b tw-border-solid tw-border-border01;
    }
  }
</style>
