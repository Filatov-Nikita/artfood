<template>
  <div class="success-card">
    <div class="tw-grow"></div>
    <div>
      <div>
        <img class="tw-mx-auto" width="250" height="200" src="../assets/heart.png" />
      </div>
      <p class="title">Заявка успешно отправлена</p>
      <p class="text">Менеджер свяжется с вами в ближайшее время</p>
    </div>
    <div class="tw-grow actions">
      <AppButton size="48" lg-size="56" design="outline-neutral" :to="{ name: 'home' }" @click="$emit('ok')">
        На главную
      </AppButton>
      <AppButton size="48" lg-size="56" @click="$emit('ok')">Хорошо</AppButton>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineEmits<{
    (event: 'ok'): void,
  }>();
</script>

<style scoped lang="scss">
  .success-card {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    width: 100%;
    text-align: center;
    gap: 24px;
  }

  .title {
    @apply tw-text-body-m-bold -tw-tracking-2 tw-mb-8;

    @include lg {
      @apply tw-text-body-l-bold;
    }
  }

  .text {
    @apply tw-text-body-s-medium tw-text-text01;

    @include lg {
      @apply tw-text-body-m-regular;
    }
  }

  .actions {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 12px;
  }
</style>
