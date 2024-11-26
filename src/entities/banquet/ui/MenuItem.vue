<template>
  <article class="pr-item" :class="{ 'pr-item--disabled': disabled }">
    <!-- <Badge v-if="item." class="pr-item__badge" color="yellow" design="primary">{{ item.tag }}</Badge> -->
    <Image
      class="pr-item__img"
      :src="item.img"
      :showCount="count > 0"
      :count="count"
    />
    <div class="name-wrap">
      <div class="name" v-html="item.name"></div>
      <div class="notice">на {{ item.persons }} персон</div>
    </div>
    <div class="gram">{{ item.ves }} г</div>
    <div class="text">{{ item.add_text }}</div>
    <slot name="action" :count="count"></slot>
  </article>
</template>

<script setup lang="ts">
  import { Image } from '@/entities/menu';
  // import Badge from '@/shared/ui/Badge/index.vue';
  import type { Element } from '@/shared/repositories/banquet';
  import { useBanquetStore } from '@/shared/store/banquet';
  import { computed } from 'vue';

  const props = withDefaults(
    defineProps<{
      item: Element,
      disabled? : boolean,
    }>(),
    {
      disabled: false
    }
  );

  const banquetStore = useBanquetStore();

  const count = computed(() => {
    return parseInt(banquetStore.getItem(props.item.id)?.count ?? '0');
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
