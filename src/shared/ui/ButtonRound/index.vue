<template>
  <button class="button-round" :class="rootClasses" :style="{ '--size': size }">
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
    }>(),
    {
      theme: 'white',
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
    padding: 0.2em;
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

    &__icon-wrap {
      width: 0.6em;
      height: 0.6em;
    }

  }
</style>
