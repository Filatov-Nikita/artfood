<template>
  <AppModal v-model="value">
    <div class="tw-w-full tw-h-full tw-rounded-1.5xl tw-overflow-hidden tw-relative">
      <ButtonRound class="tw-absolute tw-right-16 tw-top-16 tw-z-50" icon="x-regular" padding="0.25em" size="48px" @click="value = false" />
      <iframe src="https://yandex.ru/map-widget/v1/?ll=56.031424%2C54.759904&mode=usermaps&source=constructorLink&um=constructor%3A264719198f5056da6083d943620d4ca2f15ad5123454f9bc1633b621f0ed7bf0&z=11.45" width="100%" height="100%" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>
    </div>
  </AppModal>
</template>

<script setup lang="ts">
  const value = defineModel<boolean>({ default: false });
</script>
