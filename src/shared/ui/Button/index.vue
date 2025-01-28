<template>
  <component
    class="btn"
    :is="rootAttrs.tag"
    :class="rootClasses"
    v-bind="rootAttrs.attrs"
  >
    <slot name="left">
      <span class="left-icon" v-if="leftIcon">
        <AppIcon :name="leftIcon" fit />
      </span>
    </slot>
    <span class="label" v-if="$slots.default">
      <slot />
    </span>
    <slot name="right">
      <span class="right-icon" v-if="rightIcon">
        <AppIcon :name="rightIcon" fit />
      </span>
    </slot>
  </component>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import type { RouteLocationRaw } from 'vue-router';

  type Design = 'primary' | 'secondary' | 'secondary-neutral' | 'outline' | 'outline-neutral' | 'ghost' | 'ghost-neutral';
  type Size = '56' | '48' | '36';
  type BtnType = 'submit' | 'button';

  interface Props {
    design?: Design,
    size?: Size,
    lgSize?: Size,
    xlSize?: Size,
    leftIcon?: string,
    rightIcon?: string,
    disabled?: boolean,
    to?: RouteLocationRaw,
    href?: string,
    type?: BtnType,
    target?: string
  }

  const props = withDefaults(
    defineProps<Props>(),
    {
      design: 'primary',
      size: '36',
      disabled: false,
      type: 'button',
    },
  );

  const sizeClasses = computed(() => {
    return [
      `size-${props.size}`,
      props.lgSize ? `lg-size-${props.lgSize}` : '',
      props.xlSize ? `xl-size-${props.xlSize}`: '',
    ];
  });

  const rootClasses = computed(() => {
    return [ `btn-design-${props.design}` ].concat(sizeClasses.value);
  });

  const isNativeLink = computed(() => {
    return props.href !== undefined;
  });

  const isRouteLink = computed(() => {
    return props.to !== undefined;
  });

  const rootAttrs = computed(() => {
    if(isNativeLink.value) {
      return {
        tag: 'a',
        attrs: {
          href: props.href,
          target: props.target,
        }
      }
    } else if(isRouteLink.value) {
      return {
        tag: 'router-link',
        attrs: {
          to: props.to,
        }
      }
    } else {
      return {
        tag: 'button',
        attrs: {
          type: props.type,
          disabled: props.disabled,
        }
      }
    }
  });
</script>

<style scoped lang="scss">
  @mixin size_56($paddings: true) {
    @if $paddings {
      @apply tw-py-16 tw-px-20;
    }

    @apply tw-text-body-m-bold;

    .left-icon, .right-icon {
      width: 24px;
      height: 24px;
    }
  }

  @mixin size_48($paddings: true) {
    @if $paddings {
      @apply tw-py-12 tw-px-20;
    }

    @apply tw-text-body-m-bold;

    .left-icon, .right-icon {
      width: 24px;
      height: 24px;
    }
  }

  @mixin size_36($paddings: true) {
    @if $paddings {
      @apply tw-px-16 tw-py-8;
    }

    @apply tw-text-body-s-bold;

    .left-icon, .right-icon {
      width: 16px;
      height: 16px;
    }
  }

  @mixin design_primary() {
    @apply tw-bg-primary tw-text-white;

    @media (hover: hover) {
      &:hover {
        @apply tw-bg-primary-hover;
      }
    }

    &:active {
      @apply tw-bg-primary-press;
    }

    &:disabled {
      @apply tw-bg-primary-bg-disabled tw-text-disabled-text;
    }
  }

  @mixin design_secondary() {
    @apply tw-bg-secondary tw-text-primary;

    @media (hover: hover) {
      &:hover {
        @apply tw-bg-secondary-hover;
      }
    }

    &:active {
      @apply tw-bg-secondary-press;
    }

    &:disabled {
      @apply tw-bg-primary-bg-disabled tw-text-disabled-text;
    }
  }

  @mixin design_secondary_neutral() {
    @apply tw-bg-neutral tw-text-text00;

    @media (hover: hover) {
      &:hover {
        @apply tw-bg-neutral-hover;
      }
    }

    &:active {
      @apply tw-bg-neutral-press;
    }

    &:disabled {
      @apply tw-bg-primary-bg-disabled tw-text-disabled-text;
    }

    .left-icon, .right-icon {
      @apply tw-text-text01;
    }
  }

  @mixin design_outline() {
    @apply tw-border tw-border-solid tw-border-border01 tw-text-primary;

    @media (hover: hover) {
      &:hover {
        @apply tw-text-primary-hover tw-border-primary-hover;
      }
    }

    &:active {
      @apply tw-text-primary-press tw-border-primary-press;
    }

    &:disabled {
      @apply tw-border-primary-bg-disabled tw-text-disabled-text;
    }
  }

  @mixin design_outline_neutral() {
    @apply tw-border tw-border-solid tw-border-border01 tw-text-text00;

    @media (hover: hover) {
      &:hover {
        @apply tw-text-primary-hover tw-border-primary-hover;

        .left-icon, .right-icon {
          @apply tw-text-primary-hover;
        }
      }
    }

    &:active {
      @apply tw-text-primary-press tw-border-primary-press;

      .left-icon, .right-icon {
        @apply tw-text-primary-press;
      }
    }

    &:disabled {
      @apply tw-border-primary-bg-disabled tw-text-disabled-text;

      .left-icon, .right-icon {
        @apply tw-text-disabled-text;
      }
    }

    .left-icon, .right-icon {
      @apply tw-text-text01;
    }
  }

  @mixin design_ghost() {
    @apply tw-text-primary;

    @media (hover: hover) {
      &:hover {
        @apply tw-text-primary-hover;
      }
    }

    &:active {
      @apply tw-text-primary-press;
    }

    &:disabled {
      @apply tw-text-disabled-text;
    }
  }

  @mixin design_ghost_neutral() {
    @apply tw-text-text00;

    @media (hover: hover) {
      &:hover {
        @apply tw-text-primary-hover;

        .left-icon, .right-icon {
          @apply tw-text-primary-hover;
        }
      }
    }

    &:active {
      @apply tw-text-primary-press;

      .left-icon, .right-icon {
        @apply tw-text-primary-press;
      }
    }

    &:disabled {
      @apply tw-text-disabled-text;

      .left-icon, .right-icon {
        @apply tw-text-disabled-text;
      }
    }

    .left-icon, .right-icon {
      @apply tw-text-text01;
    }
  }

  @mixin with_bg_sizes() {
    &.size-36 {
      @include size_36();
    }

    &.size-48 {
      @include size_48();
    }

    &.size-56 {
      @include size_56();
    }

    &.lg-size-36 {
      @include screen($lg) {
        @include size_36();
      }
    }

    &.lg-size-48 {
      @include screen($lg) {
        @include size_48();
      }
    }

    &.lg-size-56 {
      @include screen($lg) {
        @include size_56();
      }
    }

    &.xl-size-36 {
      @include screen($xl) {
        @include size_36();
      }
    }

    &.xl-size-48 {
      @include screen($xl) {
        @include size_48();
      }
    }

    &.xl-size-56 {
      @include screen($xl) {
        @include size_56();
      }
    }
  }

  @mixin non_bg_sizes() {
    &.size-36 {
      @include size_36(false);
    }

    &.size-56 {
      @include size_56(false);
    }

    &.lg-size-36 {
      @include screen($lg) {
        @include size_36(false);
      }
    }

    &.lg-size-56 {
      @include screen($lg) {
        @include size_56(false);
      }
    }

    &.xl-size-36 {
      @include screen($xl) {
        @include size_36(false);
      }
    }

    &.xl-size-56 {
      @include screen($xl) {
        @include size_56(false);
      }
    }
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    @apply tw-rounded-full;

    &-design-primary {
      @include design_primary();
      @include with_bg_sizes();
    }

    &-design-secondary {
      @include design_secondary();
      @include with_bg_sizes();
    }

    &-design-secondary-neutral {
      @include design_secondary_neutral();
      @include with_bg_sizes();
    }

    &-design-outline {
      @include design_outline();
      @include with_bg_sizes();
    }

    &-design-outline-neutral {
      @include design_outline_neutral();
      @include with_bg_sizes();
    }

    &-design-ghost {
      @include design_ghost();
      @include non_bg_sizes();
    }

    &-design-ghost-neutral {
      @include design_ghost_neutral();
      @include non_bg_sizes();
    }
  }
</style>
