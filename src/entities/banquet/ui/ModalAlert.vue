<template>
  <AppModal v-model="showed">
    <div class="card">
      <div class="tw-text-right">
        <ButtonClose size="40px" @click="showed = false" />
      </div>
      <div>
        <p class="h2">Банкетное меню</p>
        <p class="text">
          Скачайте и ознакомьтесь с меню или закажите консультацию, наши менеджеры свяжутся с вами и ответят на все вопросы.
        </p>
      </div>
      <div class="actions">
        <AppButton class="tw-w-full" size="48" design="outline-neutral" :href="config.banquetMenuHref" target="_blank">
          Скачать меню
        </AppButton>
        <AppButton class="tw-w-full" size="48" @click="showConsult">
          Получить консультацию
        </AppButton>
      </div>
    </div>
  </AppModal>
</template>

<script setup lang="ts">
  import { useAppConfig } from '@/shared/config/app';
  import { useCallbackStore } from '@/shared/store/callback';

  const showed = defineModel<boolean>({ default: false });

  const callbackStore = useCallbackStore();

  const config = useAppConfig();

  function showConsult() {
    callbackStore.show({
      title: 'Получить консультацию',
      isInner: true,
    });
  }
</script>

<style scoped lang="scss">
  .card {
    max-width: 600px;
    padding: 16px;
    @apply tw-bg-white tw-rounded-1.5xl tw-w-full;
  }

  .actions {
    margin-top: 32px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;

    @include lg {
      flex-wrap: nowrap;
    }
  }

  .text {
    margin-top: 16px;
  }
</style>
