<template>
  <img :src="fullUrl" />
</template>

<script setup lang="ts">
  import { useAppConfig } from '@/shared/config/app';
  import { computed } from 'vue';

  const props = withDefaults(
    defineProps<{
      src: string,
      baseOff?: boolean,
    }>(),
    {
      baseOff: false,
    }
  );

  const config = useAppConfig();

  const fullUrl = computed(() => {
    return (!props.baseOff ? config.imgBase : '') + props.src;
  });
</script>
