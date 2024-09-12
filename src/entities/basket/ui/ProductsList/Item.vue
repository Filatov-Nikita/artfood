<template>
  <div class="item">
    <div class="img-wrap">
      <img class="img" :src="url" />
    </div>
    <div class="body">
      <div class="name-wrap">
        <p class="name">{{ item.name }}</p>
        <AppButton
          design="ghost-neutral"
          size="56"
          leftIcon="trash-regular"
          @click="$emit('remove', item.good_id)"
        />
      </div>
      <div class="price-wrap">
        <div></div>
        <p class="price">{{ item.price }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Item as TItem } from '@/shared/store/basket';
  import useImg from '@/shared/lib/useImg';
  import { computed } from 'vue';

  const props = defineProps<{
    item: TItem,
  }>();

  defineEmits<{
    (event: 'remove', productId: string): void,
  }>();

  const { url } = useImg(
    computed(() => props.item.img)
  );
</script>

<style scoped lang="scss">
  .item {
    display: flex;
    gap: 8px;
    @apply tw-py-16 tw-border-b tw-border-solid tw-border-border01;
  }

  .img-wrap {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 8px;
    overflow: hidden;
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
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  .price {
    @apply tw-text-body-m-bold -tw-tracking-2;
  }

  .body {
    flex-grow: 1;
  }

  .name-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    align-items: flex-start;
    margin-bottom: 8px;
  }
</style>
