<template>
  <button class="nav-btn" :class="[ `nav-btn-swiper--${type}`, { 'nav-btn-swiper': swiper } ]">
    <AppIcon fit :name="type === 'prev' ? 'caret-left-regular' : 'caret-right-regular'" />
  </button>
</template>

<script setup lang="ts">
  withDefaults(
    defineProps<{
      type: 'prev' | 'next',
      size?: string,
      swiper?: boolean,
    }>(),
    {
      size: '40px',
      swiper: false,
    },
  );
</script>

<style scoped lang="scss">
  .nav-btn {
    font-size: v-bind(size);
    width: 1em;
    height: 1em;
    padding: 0.2em;
    border-radius: 50%;
    @apply tw-bg-white;

    &:disabled, &--disabled {
      background-color: theme('colors.primary-bg-disabled') !important;
      color: theme('colors.disabled-text') !important;
    }

    @include lg {
      &:hover {
        @apply tw-bg-neutral-hover;
      }

      &:active  {
        @apply tw-bg-neutral-press;
      }
    }
  }

  .nav-btn-swiper {
    position: absolute;
    z-index: 9000;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.08), -2px 9px 10px 0 rgba(0, 0, 0, 0.07), -4px 21px 13px 0 rgba(0, 0, 0, 0.03), -7px 37px 15px 0 rgba(0, 0, 0, 0.01), -12px 58px 17px 0 rgba(0, 0, 0, 0);

    @include lg {
      display: block;
    }

    &--prev {
      left: 16px;
    }

    &--next {
      right: 16px;
    }
  }
</style>
