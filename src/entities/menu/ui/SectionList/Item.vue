<template>
  <section class="section">
    <p class="name">{{ name }}</p>
    <div class="items">
      <CardItem
        class="item"
        v-for="product in products"
        :key="product.id"
        :item="product"
        @show:product="$emit('change:product', product.id)"
      >
        <template #action="{ count }">
          <ButtonMinMax
            class="tw-w-full"
            :price="product.price"
            :productId="product.id"
            :count="count"
            @reduce="basketStore.reduce"
            @append="basketStore.append"
          />
        </template>
      </CardItem>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { CardItem } from '@/entities/menu';
  import type { MenuElement } from '@/shared/repositories/menu';
  import { useBasketStore } from '@/shared/store/basket';
  import { ButtonMinMax } from '@/shared/ui';

  defineProps<{
    name: string,
    products: MenuElement[],
  }>();

  const emit = defineEmits<{
    (event: 'change:product', product: string): void,
  }>();

  const basketStore = useBasketStore();
</script>

<style scoped lang="scss">
  .section {
    padding-top: 40px;

    @include xl {
      padding-top: 64px;
    }
  }

  .name {
    @apply tw-text-body-l-bold tw-mb-24 -tw-tracking-2;

    @include lg {
      @apply tw-text-heading-2-bold tw-mb-32;
    }
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    margin-top: -40px;

    @include lg {
      margin-left: -20px;
    }
  }

  .item {
    width: 100%;
    margin-top: 40px;

    @include lg {
      width: calc(100% / 12 * 4 - 20px);
      margin-left: 20px;
    }
  }
</style>
