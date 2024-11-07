<template>
  <AppModal v-model="value">
    <template #after>
      <ButtonClose class="modal-btn-close" size="40px" padding="0.2em" @click="value = false" />
    </template>
    <div>
      1
    </div>
  </AppModal>
</template>

<script setup lang="ts">
  const value = defineModel({
    default: false,
  })
</script>
