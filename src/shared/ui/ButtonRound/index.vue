<template>
  <button class="button-round" :class="rootClasses" :style="{ '--size': size, '--padding': padding }">
    <span class="button-round__icon-wrap">
      <AppIcon :name="icon" fit />
    </span>
  </button>
</template>

<script setup lang="ts">
  import { computed } from 'vue';

  type Theme = 'white' | 'neutral';

  const props = withDefaults(
    defineProps<{
      icon: string,
      size: string,
      theme?: Theme,
      padding?: string,
    }>(),
    {
      theme: 'white',
      padding: '0.2em',
    }
  );

  const rootClasses = computed(() => {
    return {
      'button-round--neutral': props.theme === 'neutral',
      'button-round--white': props.theme === 'white',
    }
  });
</script>

<style scoped lang="scss">
  .button-round {
    width: var(--size);
    height: var(--size);
    font-size: var(--size);
    padding: var(--padding);
    border-radius: 50%;

    &--white {
      @apply tw-bg-white tw-text-text00;

      @include lg {
        &:hover {
          @apply tw-bg-neutral-hover;
        }

        &:active {
          @apply tw-bg-neutral-press;
        }
      }
    }

    &--neutral {
      @apply tw-bg-neutral tw-text-text00;

      @include lg {
        &:hover {
          @apply tw-bg-neutral-hover;
        }

        &:active {
          @apply tw-bg-neutral-press;
        }
      }
    }
  }
</style>
