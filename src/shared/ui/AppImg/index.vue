<template>
  <img :src="fullUrl" />
</template>

<script setup lang="ts">
  import { useAppConfig } from '@/shared/config/app';
  import { computed } from 'vue';

  const props = defineProps<{
    src: string,
    baseUrl?: string,
  }>();

  const config = useAppConfig();

  const fullUrl = computed(() => {
    return (props.baseUrl ? props.baseUrl : config.imgBase) + props.src;
  });
</script>
