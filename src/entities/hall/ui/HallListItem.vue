<template>
  <article class="item">
    <h2 class="name">{{ hall.name }}</h2>
    <p class="address">{{ hall.address }}</p>
    <AppButton class="tw-w-full"size="48">Получить консультацию</AppButton>
    <div class="badges">
      <Badge leftIcon="car-profile-bold" design="primary" color="green">
        {{ hall.parking }}
      </Badge>
      <Badge leftIcon="fork-knife-bold" design="primary" color="green">
        {{ hall.kitchen }}
      </Badge>
      <Badge leftIcon="users-three-bold" design="primary" color="green">
        {{ hall.persons }}
      </Badge>
    </div>
  </article>
</template>

<script setup lang="ts">
  import type { Hall } from '../model/useData';
  import { Badge } from '@/shared/ui';

  defineProps<{
    hall: Hall,
  }>();
</script>

<style scoped lang="scss">
  .item {
    @apply tw-py-32 tw-border-b tw-border-solid tw-border-border01;
  }

  .name {
    @apply tw-text-body-l-bold tw-mb-8 -tw-tracking-2;
  }

  .address {
    @apply tw-text-body-s-medium tw-text-text01 tw-mb-16;
  }

  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    @apply tw-mt-16;
  }

  .text {
    @apply tw-text-body-s-regular tw-mt-16;
  }
</style>
