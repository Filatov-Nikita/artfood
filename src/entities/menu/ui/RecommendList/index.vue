<template>
  <div class="items-list">
    <p class="title">{{ title }}</p>
    <div class="items">
      <CardItem
        class="item"
        v-for="product in products"
        :key="product.id"
        :item="product"
      >
        <template #action="{ count }">
          <ButtonToggle
            :price="product.price"
            :count="count"
            :productId="product.id"
          />
        </template>
      </CardItem>
    </div>
  </div>
</template>

<script setup lang="ts">
  import CardItem from '../CardItem/index.vue';
  import type { MenuElement } from '@/shared/repositories/menu';
  import { ButtonToggle } from '@/entities/basket';

  defineProps<{
    title: string,
    products: MenuElement[],
  }>();
</script>

<style scoped lang="scss">
  .title {
    @apply tw-text-body-m-bold -tw-tracking-2 tw-mb-20;

    @include xl {
      @apply tw-text-body-l-bold tw-mb-20;
    }
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    margin: -8px;

    @include lg {
      margin: -10px;
    }
  }

  .item {
    margin: 8px;
    width:  calc(100% - 16px);

    @include lg {
      margin: 10px;
      width:  calc(50% - 20px);
    }
  }
</style>
