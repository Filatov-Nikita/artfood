<template>
  <svg :width="width" :height="height" aria-hidden="true" :class="[ { 'tw-w-full': fit, 'tw-h-full': fit }, colorClass ]" :fill="fill">
    <use :href="symbolId"></use>
  </svg>
</template>

<script setup lang="ts">
  import { computed } from 'vue';

  interface Props {
    prefix?: string,
    name: string,
    colorHex?: string,
    colorClass?: string,
    fit?: boolean,
    width?: string,
    height?: string,
  }

  const props = withDefaults(defineProps<Props>(), {
    prefix: 'icon',
    fit: false,
  });

  const fill = computed(() => {
    if(props.colorHex) return props.colorHex;
    if(props.colorClass) return '';
    return 'currentColor';
  });

  const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>

<style scoped lang="scss">

</style>
