<template>
  <AppInput :name="name" :label="label" v-model="value" maska="+7 (9##) ### ## ##" />
</template>

<script setup lang="ts">
  withDefaults(defineProps<{
    name?: string,
    label?: string,
  }>(), {
    name: 'phone',
    label: 'Телефон',
  });

  const value = defineModel<string>();
</script>
