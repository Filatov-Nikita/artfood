<template>
  <component
    class="app-button"
    :class="[
      `app-button--${themeVal}`,
      {
        [ `app-button--size-${sizeVal}` ]: themeVal !== 'ghost' && themeVal !== 'ghost-neutral',
        [ `app-button--ghost-${sizeVal}` ]: themeVal === 'ghost' || themeVal === 'ghost-neutral',
      }
    ]"
    :is="root.tag"
    v-bind="root.opts"
  >
    <span
      v-if="leftIcon"
      class="app-button__left-icon"
      :class="[ `app-button__left-icon--size-${sizeVal}`, `app-button__left-icon--${themeVal}` ]"
    >
      <AppIcon :name="leftIcon" fit />
    </span>
    <span v-if="image">
      <img :src="image" />
    </span>
    <span>
      <slot></slot>
    </span>
    <span
      v-if="rightIcon"
      class="app-button__right-icon"
      :class="[ `app-button__right-icon--size-${sizeVal}`, `app-button__right-icon--${themeVal}` ]"
    >
      <AppIcon :name="rightIcon" fit />
    </span>
  </component>
</template>

<script setup lang="ts">
  import { computed, toRef } from 'vue';
  import { ButtonProps, ModelButton } from './types';
  import useTheme from './composables/useTheme';
  import useSize from './composables/useSize';

  const props = defineProps<ButtonProps>();

  const { theme: themeVal } = useTheme(toRef(props, 'theme'));
  const { size: sizeVal } = useSize(toRef(props, 'size'));

  const model = computed(() => {
    if(!props.model) {
      const modelBtn: ModelButton = { is: 'button', type: 'button' };
      return modelBtn;
    }
    return props.model;
  });

  const root = computed(() => {
    if(model.value.is === 'link-native') {
      const { is, ...opts } = model.value;
      return {
        is,
        tag: 'a' as const,
        opts: {
          href: opts.href,
        }
      }
    } else if(model.value.is === 'link') {
      const { is, ...opts } = model.value;
      return {
        is,
        tag: 'router-link' as const,
        opts: {
          to: opts.to,
        }
      };
    } else {
      const { is, ...opts } = model.value;
      return {
        is,
        tag: 'button' as const,
        opts: {
          type: opts.type ?? 'button',
          disabled: opts.disabled ?? false,
        } as typeof opts,
      };
    }
  });
</script>

<style scoped lang="scss">
  %withFill {
    @apply tw-rounded-full;
  }

  %withBorder {
    @apply tw-rounded-full tw-border tw-border-solid;
  }

  @mixin withFillDisabled {
    &:disabled {
      pointer-events: none;
      @apply tw-bg-primary-bg-disabled tw-text-disabled-text;
    }
  }

  @mixin withBorderDisabled {
    &:disabled {
      pointer-events: none;
      @apply tw-border-primary-bg-disabled tw-text-disabled-text;
    }
  }

  @mixin ghostDisabled {
    &:disabled {
      pointer-events: none;
      @apply tw-text-disabled-text;
    }
  }

  @mixin primary {
    &--primary {
      @extend %withFill;
      @apply tw-bg-primary tw-text-white;

      @include withFillDisabled();

      @include lg {
        &:hover {
          @apply tw-bg-primary-hover;
        }

        &:active {
          @apply tw-bg-primary-press;
        }
      }
    }
  }

  @mixin secondary {
    &--secondary {
      @extend %withFill;
      @apply tw-bg-secondary tw-text-primary;

      @include withFillDisabled();

      @include lg {
        &:hover {
          @apply tw-bg-secondary-hover;
        }

        &:active {
          @apply tw-bg-secondary-press;
        }
      }
    }
  }

  @mixin secondaryNeutral {
    &--secondary-neutral {
      @extend %withFill;
      @apply tw-bg-neutral tw-text-text00;

      @include withFillDisabled();

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

  @mixin outline {
    &--outline {
      @extend %withBorder;
      @apply tw-border-border01 tw-text-primary;

      @include withBorderDisabled();

      @include lg {
        &:hover {
          @apply tw-border-primary-hover tw-text-primary-hover;
        }

        &:active {
          @apply tw-border-primary-press tw-text-primary-press;
        }
      }
    }
  }

  @mixin outlineNeutral {
    &--outline-neutral {
      @extend %withBorder;
      @apply tw-border-border01 tw-text-text00;

      @include withBorderDisabled();

      @include lg {
        &:hover {
          @apply tw-border-primary-hover tw-text-primary-hover;
        }

        &:active {
          @apply tw-border-primary-press tw-text-primary-press;
        }
      }
    }

    &--outline-neutral:hover &__left-icon, &--outline-neutral:hover &__right-icon {
      color: inherit !important;
    }

    &--outline-neutral:active &__left-icon, &--outline-neutral:active &__right-icon {
      color: inherit !important;
    }
  }

  @mixin ghostSizes() {
    &--ghost-56, &--ghost-48 {
      @apply tw-text-body-m-bold;
    }

    &--ghost-36 {
      @apply tw-text-body-s-bold;
    }
  }

  @mixin ghost {
    &--ghost {
      @apply tw-text-primary;

      @include ghostDisabled();

      @include lg {
        &:hover {
          @apply tw-text-primary-hover;
        }

        &:active {
          @apply tw-text-primary-press;
        }
      }


    }
  }

  @mixin ghostNeutral {
    &--ghost-neutral {
      @apply tw-text-text00;

      @include ghostDisabled();

      @include lg {
        &:hover {
          @apply tw-text-primary-hover;
        }

        &:active {
          @apply tw-text-primary-press;
        }
      }
    }

    &--ghost-neutral:hover &__left-icon, &--ghost-neutral:hover &__right-icon {
      color: inherit !important;
    }

    &--ghost-neutral:active &__left-icon, &--ghost-neutral:active &__right-icon {
      color: inherit !important;
    }
  }

  .app-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    &--size-56, &--size-48 {
      padding: 12px 20px;
      @apply tw-text-body-m-bold;
    }

    &--size-36 {
      padding: 8px 16px;
      @apply tw-text-body-s-bold;
    }

    &__left-icon, &__right-icon {
      &--size-56, &--size-48 {
        width: 24px;
        height: 24px;
      }

      &--size-36 {
        width: 16px;
        height: 16px;
      }

      &--secondary-neutral,  &--outline-neutral, &--ghost-neutral  {
        @apply tw-text-text01;
      }
    }

    @include primary();
    @include secondary();
    @include secondaryNeutral();
    @include outline();
    @include outlineNeutral();
    @include ghost();
    @include ghostNeutral();
    @include ghostSizes();
  }
</style>
