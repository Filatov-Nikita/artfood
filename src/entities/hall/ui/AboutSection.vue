<template>
  <section class="halls">
    <div class="wrap">
      <h2 class="title">Проведите мероприятие любого формата в одном из наших функциональных банкетных залов</h2>
      <div class="badges">
        <Badge color="white" design="primary">банкеты</Badge>
        <Badge color="white" design="primary">тренинги</Badge>
        <Badge color="white" design="primary">презентации</Badge>
        <Badge color="white" design="primary">конференции</Badge>
        <Badge color="white" design="primary">фуршеты</Badge>
        <Badge color="white" design="primary">деловые обеды</Badge>
        <Badge color="white" design="primary">свадьбы</Badge>
      </div>
      <div class="img-wrap" v-if="!grid.lg">
        <img width="637" height="456" src="../assets/image.png" alt="" loading="lazy">
      </div>
      <div class="actions">
        <AppButton class="action" size="48" design="primary" left-icon="bow-flood-regular" @click="banquetStore.showedModal = true">
          Собрать меню
        </AppButton>
        <AppButton class="action" size="48" design="secondary" :to="{ name: 'halls' }">Банкетные залы</AppButton>
      </div>
    </div>
    <div class="img-wrap" v-if="grid.lg">
      <img width="637" height="456" src="../assets/image.png" alt="" loading="lazy">
    </div>
  </section>
</template>

<script setup lang="ts">
  import { Badge } from '@/shared/ui';
  import { useBanquetStore } from '@/shared/store/banquet';
  import { useAppGrid } from '@/shared/lib/useScreen';

  const banquetStore = useBanquetStore();
  const grid = useAppGrid();
</script>

<style scoped lang="scss">
  .halls {
    @apply tw-bg-neutral tw-rounded-1.5xl tw-p-24 tw-relative;

    @include lg {
      display: grid;
      grid-template-columns: 430px 1fr;
      column-gap: 50px;
      @apply tw-p-32;
    }

    @include xl {
      column-gap: 64px;
      grid-template-columns: 430px 400px;
    }
  }

  .title {
    @apply tw-text-body-l-bold -tw-tracking-2 tw-mb-16;

    @include lg {
      @apply tw-text-heading-3-bold tw-mb-24;
    }
  }

  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    @apply tw-mb-16;

    @include lg {
      max-width: 320px;
      @apply tw-mb-32;
    }
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;

    @include lg {
      max-width: 192px;
    }

    @include xl {
      position: absolute;
      right: 32px;
      bottom: 48px;
    }
  }

  .action {
    width: 100%;
  }

  .img-wrap {
    @apply tw-mb-16;

    @include lg {
      align-self: center;
      @apply tw-mb-0;
    }
  }
</style>
