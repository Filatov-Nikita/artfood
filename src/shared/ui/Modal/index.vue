<template>
  <Teleport to="body">
    <Transition
      appear
      :name="animation"
    >
      <div
        v-if="value"
        class="modal"
        :class="[
          `x-${xPos}`,
          `y-${yPos}`
        ]"
      >
        <div class="wrap">
          <slot v-bind="{ hide }"></slot>
        </div>
        <div class="overlay" @click="hide"></div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
  import { useScrollToggle } from '@/shared/lib';

  interface Props {
    xPos?: 'left' | 'center' | 'right',
    yPos?: 'top' | 'center' | 'bottom',
    animation?: 'zoom' | 'slide-right',
  }

  const props = withDefaults(
    defineProps<Props>(),
    {
      xPos: 'center',
      yPos: 'center',
      animation: 'zoom',
    },
  );


  const value = defineModel<boolean>({
    default: false,
  });

  useScrollToggle(value);

  function hide() {
    value.value = false;
  }
</script>

<style scoped lang="scss">
  .modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 9000;
    left: 0;
    top: 0;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.64);
    z-index: -1;
  }

  .wrap {
    pointer-events: none;
    padding: var(--p, 16px);
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: grid;
  }

  .x-right .wrap {
    justify-items: end;
  }

  .x-left .wrap {
    justify-items: start;
  }

  .x-center .wrap {
    justify-items: center;
  }

  .y-top .wrap {
    align-items: start;
  }

  .y-center .wrap {
    align-items: center;
  }

  .y-bottom .wrap {
    align-items: end;
  }

  .zoom-enter-active, .slide-right-enter-active {
    animation-duration: var(--delay, 300ms);
  }

  .zoom-leave-active, .slide-right-leave-active {
    animation-duration: var(--delay, 300ms);
  }

  :slotted(.zoom-enter-active .wrap > div) {
    animation: zoomIn;
    animation-duration: var(--duration, 320ms);
  }

  :slotted(.zoom-leave-active .wrap > div) {
    animation: zoomOut;
    animation-duration: var(--duration, 320ms);
  }

  :slotted(.slide-right-enter-active .wrap > div) {
    animation: slideInRight;
    animation-duration: var(--duration, 320ms);
  }

  :slotted(.slide-right-leave-active .wrap > div) {
    animation: slideOutRight;
    animation-duration: var(--duration, 320ms);
  }

  :slotted(.wrap > div) {
    pointer-events: all;
    will-change: scroll-position;
    overflow: auto;
    max-height: calc(100vh - var(--p));
  }
</style>
