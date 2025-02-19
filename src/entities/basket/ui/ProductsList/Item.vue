<template>
  <div class="item">
    <div class="img-wrap">
      <img class="img" :src="url" />
    </div>
    <div class="body">
      <div class="name-wrap">
        <p class="name" v-html="item.name"></p>
        <AppButton
          class="tw-shrink-0"
          design="ghost-neutral"
          size="56"
          leftIcon="trash-regular"
          @click="$emit('remove', item.good_id)"
        />
      </div>
      <div class="price-wrap">
        <ButtonMinMaxMini
          class="tw-shrink-0"
          :count="count"
          @reduce="basketStore.reduce(item.good_id)"
          @append="basketStore.append(item.good_id)"
        />
        <p class="price">
          <span class="forone">
            {{ $amount(price) }} / за шт
          </span>
          <span>
            {{ $amount(total) }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { BasketItem } from '@/shared/repositories/basket';
  import useImg from '@/shared/lib/useImg';
  import { ButtonMinMaxMini } from '@/shared/ui';
  import { computed } from 'vue';
  import { useBasketStore } from '@/shared/store/basket';

  const basketStore = useBasketStore();

  const props = defineProps<{
    item: BasketItem,
  }>();

  defineEmits<{
    (event: 'remove', productId: string): void,
  }>();

  const { url } = useImg(
    computed(() => props.item.img)
  );

  const count = computed(() => {
    return parseInt(props.item.count);
  });

  const price = computed(() => {
    return parseInt(props.item.price);
  });

  const total = computed(() => {
    return count.value * price.value;
  });
</script>

<style scoped lang="scss">
  .item {
    display: flex;
    gap: 8px;
    @apply tw-py-16;
    @include lg {
      @apply  tw-py-24;
      &:first-child {
        padding-top: 16px;
      }
      &:last-child {
        padding-bottom: 0;
      }
    }

    & + & {
      @apply tw-border-t tw-border-solid tw-border-border01;
    }
  }

  .img-wrap {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 8px;
    overflow: hidden;

    @include lg {
      width: 64px;
      height: 64px;
    }
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .name {
    flex-grow: 1;
    @apply tw-text-body-s-bold -tw-tracking-2;
  }

  .price-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  .price {
    display: flex;
    flex-wrap: wrap;
    column-gap: 8px;
    @apply tw-text-body-m-bold -tw-tracking-2;

    @include lg {
      @apply tw-text-body-l-bold;
    }
  }

  .forone {
    @apply tw-text-body-xs-medium tw-text-text01 tw-py-4;

    @include lg {
      @apply tw-text-body-s-medium;
    }
  }

  .body {
    flex-grow: 1;
  }

  .name-wrap {
    display: flex;
    gap: 24px;
    align-items: flex-start;
    margin-bottom: 8px;
  }
</style>
