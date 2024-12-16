<template>
  <div class="minmax-mini" :class="`minmax-mini--${size}`">
    <button class="action-btn" @click="$emit('reduce')">
      <AppIcon class="icon" name="minus" />
    </button>
    <span class="count">
      {{ count }}
    </span>
    <button class="action-btn" @click="$emit('append')">
      <AppIcon class="icon" name="plus" />
    </button>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    count: number,
    size?: 'md' | 'xl',
  }

  withDefaults(
    defineProps<Props>(),
    {
      size: 'md',
    }
  );

  defineEmits<{
    (event: 'append'): void,
    (event: 'reduce'): void,
  }>();
</script>

<style scoped lang="scss">
  .minmax-mini{
    display: inline-flex;
    align-items: center;
    overflow: hidden;
    @apply tw-rounded-full tw-bg-neutral;

    &--xl {
      .icon {
        width: 24px;
        height: 24px;
      }

      .action-btn {
        @apply tw-py-16 tw-px-20 tw-pl-16;

        &:first-child {
          @apply tw-pr-16 tw-pl-20;
        }
      }

      .count {
        @apply tw-text-body-m-bold;
      }
    }

    &--md {
      .icon {
        width: 16px;
        height: 16px;
      }

      .action-btn {
        @apply tw-p-12 tw-pl-8;

        &:first-child {
          @apply tw-pr-8 tw-pl-12;
        }
      }

      .count {
        @apply tw-text-body-s-bold;
      }
    }
  }

  .action-btn {
    transition: background-color 100ms;
    flex-shrink: 0;
    @apply tw-text-text01;

    &:hover {
      @apply tw-bg-neutral-hover;
    }

    &:active {
      @apply tw-bg-neutral-press;
    }
  }

  .count {
    min-width: 20px;
    @apply -tw-tracking-2 tw-text-center tw-grow;
  }
</style>
