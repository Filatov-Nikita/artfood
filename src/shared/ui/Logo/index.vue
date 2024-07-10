<template>
  <LogoRu v-if="type === 'ru'" :color="color" />
  <LogoEn v-else :color="color" />
</template>

<script setup lang="ts">
  import LogoRu from './variants/Rus.vue';
  import LogoEn from './variants/En.vue';
  import { Color } from './types';

  type LogoType = 'ru' | 'en';

  withDefaults(
    defineProps<{
      type?: LogoType,
      color?: Color,
    }>(),
    { type: 'ru', color: 'dark' },
  );
</script>
