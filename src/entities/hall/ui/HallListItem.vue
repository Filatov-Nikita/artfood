<template>
  <article class="item">
    <div class="info-col">
      <div class="price-wrap">
        <Badge class="price" design="primary" color="yellow">{{ hall.price }}</Badge>
        <h2 class="name">{{ hall.name }}</h2>
      </div>
      <p class="address">{{ hall.address }}</p>
      <AppButton class="callback" size="48" @click="showCallback">Получить консультацию</AppButton>
    </div>
    <div class="text-col">
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
    </div>
  </article>
</template>

<script setup lang="ts">
  import type { Hall } from '@/shared/repositories/halls';
  import { useCallbackStore } from '@/shared/store/callback';
  import { Badge } from '@/shared/ui';

  const props = defineProps<{
    hall: Hall,
  }>();

  const callbackStore = useCallbackStore();

  function showCallback() {
    callbackStore.show({
      title: `Получить консультацию по "${props.hall.name}"`,
    });
  }
</script>

<style scoped lang="scss">
  .item {
    @apply tw-py-32 tw-border-b tw-border-solid tw-border-border01;

    @include lg {
      display: grid;
      grid-template-columns: 478px minmax(0, 1fr);
      column-gap: 20px;
      @apply tw-py-48;
    }
  }

  .callback {
    @apply tw-w-full;

    @include lg {
      @apply tw-w-auto;
    }
  }

  .name {
    @apply tw-text-body-l-bold -tw-tracking-2 tw-pr-96 tw-mt-4;

    @include lg {
      @apply tw-mt-0 tw-pr-0 -tw-order-1;
    }

    @include xl {
      @apply tw-text-heading-3-bold;
    }
  }

  .address {
    @apply tw-text-body-s-medium tw-text-text01 tw-mb-16;
  }

  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    @apply tw-mt-16;

    @include lg {
      gap: 12px;
      @apply tw-mt-0;
    }
  }

  .text {
    @apply tw-text-body-s-regular tw-mt-16;
  }

  .price {
    width: max-content;
    margin-left: auto;
    transform: rotate(-3deg);
    display: block !important;

    @include lg {
      width: auto;
      margin-left: 0;
    }
  }

  .price-wrap {
    max-width: 360px;
    @apply tw-mb-8;

    @include lg {
      max-width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
      @apply tw-mb-12;
    }
  }
</style>
