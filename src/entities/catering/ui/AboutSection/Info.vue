<template>
  <section class="info">
    <div class="title-wrap">
      <h2>Кейтеринг</h2>
    </div>
    <p class="subtitle">Выездной ресторан на вашем грандиозном мероприятии</p>
    <div class="badges">
      <Badge left-icon="fish-simple-bold" color="yellow" design="primary">изысканное меню</Badge>
      <Badge left-icon="fork-knife-bold" color="yellow" design="primary">безупречная сервировка</Badge>
      <Badge left-icon="call-bell-bold" color="yellow" design="primary">обслуживание</Badge>
    </div>
    <p class="text">Соберите меню для будущего банкета самостоятельно или обратитесь за помощью к нашему специалисту</p>
    <div class="img-wrap">
      <img width="896" height="683" src="./image.png" loading="lazy" />
    </div>
    <div class="actions">
      <AppButton class="action" size="48" design="primary" left-icon="bow-flood-regular">Собрать меню</AppButton>
      <AppButton class="action" size="48" design="secondary" to="#">Банкетные залы</AppButton>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { Badge } from '@/shared/ui';


</script>

<style scoped lang="scss">
  .info {
    @apply tw-p-24 tw-bg-neutral tw-rounded-1.5xl tw-text-body-m-medium;
  }

  .title-wrap {
    @apply tw-mb-12;
  }

  .subtitle {
    @apply tw-mb-16;
  }

  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    @apply tw-mb-16;
  }

  .text {
    @apply tw-mb-16;
  }

  .img-wrap {
    @apply tw-mb-16;
  }

  .action {
    width: 100%;

    & + & {
      @apply tw-mt-12;
    }
  }
</style>
