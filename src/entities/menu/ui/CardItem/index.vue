<template>
  <article class="pr-item" :class="{ 'pr-item--disabled': disabled }">
    <div class="pr-item__top" @click="onClick">
      <Badge v-if="item.tag" class="pr-item__badge" color="yellow" design="primary">{{ item.tag }}</Badge>
      <Image
        class="pr-item__img"
        :class="{ 'pr-item__img--clickable': clickable }"
        :src="item.img"
        :showCount="count > 0"
        :count="count"
      />
      <div class="name-wrap">
        <div class="name" v-html="item.name"></div>
        <div v-if="showPersonsCount && item.presons_count" class="notice">на {{ item.presons_count }} персон</div>
      </div>
      <div class="gram">{{ item.ves }} г</div>
      <div class="text">{{ item.podpis }}</div>
    </div>
    <slot name="action" :count="count"></slot>
  </article>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import Image from '../Image/index.vue';
  import Badge from '@/shared/ui/Badge/index.vue';
  import { useBasketItem } from '@/entities/basket';
  import type { MenuElement } from '@/shared/repositories/menu';

  const props = withDefaults(
    defineProps<{
      item: MenuElement,
      disabled? : boolean,
      clickable?: boolean,
      showPersonsCount?: boolean,
    }>(),
    {
      disabled: false,
      clickable: true,
    }
  );

  const emit = defineEmits<{
    (event: 'show:product', id: string): void,
  }>();

  const { count } = useBasketItem(computed(() => props.item.id));

  function onClick() {
    if(!props.clickable) return;
    emit('show:product', props.item.id);
  }
</script>

<style scoped lang="scss">
  .pr-item {
    position: relative;
    display: grid;
    align-content: space-between;
    &__top {
      cursor: pointer;
    }
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
      &--clickable {
        cursor: pointer;
      }
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
    @apply tw-text-text01 tw-text-body-s-regular tw-mt-4 tw-mb-12;
  }
</style>
