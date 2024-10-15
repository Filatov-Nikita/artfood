<template>
  <article class="pr-item" :class="{ 'pr-item--disabled': disabled }">
    <Badge v-if="badge" class="pr-item__badge" color="yellow" design="primary">{{ badge }}</Badge>
    <Image class="pr-item__img" :path="imgUrl" :showCount="count > 0" :count="count" @click="$emit('show:product', id)" />
    <div class="name-wrap">
      <div class="name" v-html="name"></div>
      <div v-if="personsCount" class="notice">на {{ personsCount }} персон</div>
    </div>
    <div v-if="gram" class="gram">{{ gram }} г</div>
    <div v-if="text" class="text">{{ text }}</div>
    <ButtonMinMax
      v-if="price"
      class="price"
      :price="price"
      :productId="id"
      :count="count"
    />
  </article>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import Image from '../Image/index.vue';
  import Badge from '@/shared/ui/Badge/index.vue';
  import { baseURL } from '@/shared/api/useHttp';
  import { ButtonMinMax } from '@/entities/basket';
  import { useBasketStore } from '@/shared/store/basket';

  const props = withDefaults(
    defineProps<{
      id: string,
      name: string,
      price?: string,
      disabled?: boolean,
      badge?: string | null,
      personsCount?: string,
      gram?: string,
      text?: string | null,
      image: string | null,
    }>(),
    {
      disabled: false,
    }
  );

  defineEmits<{
    (event: 'show:product', id: string): void,
  }>();

  const origin = baseURL.replace('/api', '');

  const imgUrl = computed(() => {
    if(!props.image) return null;
    return origin + props.image;
  });

  const basketStore = useBasketStore();

  const basketItem = computed(() => {
    return basketStore.getItem(props.id);
  });

  const count = computed(() => {
    return parseInt(basketItem.value?.count ?? '0');
  });
</script>

<style scoped lang="scss">
  .pr-item {
    position: relative;

    &--disabled {
      opacity: 0.5;
      pointer-events: none;
    }

    &__badge {
      position: absolute;
      top: 12px;
      left: 12px;
      z-index: 2;
    }

    &__img {
      z-index: 1;
      cursor: pointer;
    }
  }

  .name-wrap {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px;
    @apply tw-mt-12;
  }

  .name {
    flex-grow: 1;
    @apply tw-text-body-m-medium;
  }

  .notice {
    letter-spacing: -0.02em;
    @apply tw-text-body-xs-bold tw-text-primary;
  }

  .gram {
    margin-top: 2px;
    @apply tw-text-text02 tw-text-body-xs-regular;
  }

  .text {
    @apply tw-text-text01 tw-text-body-s-regular tw-mt-4;
  }

  .price {
    width: 100%;
    @apply tw-mt-12;
  }
</style>
