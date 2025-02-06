<template>
  <AppModal v-model="value">
    <template #after>
      <ButtonClose class="modal-btn-close" size="40px" padding="0.2em" @click="value = false" />
    </template>
    <div class="card-video">
      <iframe width="100%" height="450px" src="https://www.youtube.com/embed/cUrvIeJMKXI?si=cGyCqBEckGeP9121" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </AppModal>
</template>

<script setup lang="ts">
  const value = defineModel({
    default: false,
  })
</script>

<style scoped lang="scss">
  .card-video {
    padding: 16px;
    max-width: 800px;
    @apply tw-bg-white tw-w-full tw-rounded-xl;
  }
</style>
