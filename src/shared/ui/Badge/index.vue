<template>
  <div class="badge" :class="[ `badge-${design}`, color ]">
    <span class="icon-wrap" v-if="leftIcon">
      <AppIcon :name="leftIcon" fit />
    </span>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  type Color = 'red' | 'orange' | 'yellow' | 'green' | 'white';
  type Design = 'primary' | 'secondary' | 'outline' | 'neutral';

  interface Props {
    color: Color,
    design: Design,
    leftIcon?: string,
  }

  defineProps<Props>();
</script>

<style scoped lang="scss">
  .badge {
    display: inline-flex;
    align-items: center;
    letter-spacing: -0.02em;
    text-align: center;
    gap: 4px;
    @apply tw-rounded-full tw-px-8 tw-text-body-s-bold;

    &-primary {
      &.red {
        @apply tw-bg-red tw-text-white;
      }

      &.yellow {
        @apply tw-bg-yellow tw-text-text00;
      }

      &.green {
        background-color: rgba(76, 175, 80, 1);
        @apply tw-text-white;
      }

      &.white {
        @apply tw-text-text00 tw-bg-white;
      }
    }

    &-secondary {
      &.red {
        @apply tw-bg-red-10% tw-text-red;
      }

      &.yellow {
        @apply tw-bg-yellow-10% tw-text-text00;
      }

      &.green {
        background-color: rgba(76, 175, 80, 0.1);
        color: rgba(76, 175, 80, 1);
      }
    }

    &-outline {
      &.red {
        @apply tw-text-red;
      }

      &.yellow {
        @apply tw-text-text00;
      }

      &.green {
        border: 1px solid rgba(76, 175, 80, 1);
        color: rgba(76, 175, 80, 1);
      }
    }
    &-neutral {
      @apply tw-bg-neutral;

    }
  }

  .icon-wrap {
    width: 16px;
    height: 16px;
  }
</style>
