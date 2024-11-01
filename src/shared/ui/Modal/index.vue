<template>
  <Teleport to="body">
    <div
      v-if="!isLeaved"
      class="modal"
      :class="[
        `x-${xPos}`,
        `y-${yPos}`
      ]"
    >
      <Transition
        appear
        :name="animation"
        @after-leave="isLeaved = true"
      >
        <div v-if="value" class="wrap">
          <slot v-bind="{ hide }"></slot>
        </div>
      </Transition>
      <div class="overlay" @click="hide"></div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
  import { useScrollToggle } from '@/shared/lib';
  import { computed, ref, watch } from 'vue';
  import { useAppScreen } from '@/shared/lib/useScreen';

  interface Props {
    xPos?: 'left' | 'center' | 'right',
    yPos?: 'top' | 'center' | 'bottom',
    animation?: 'zoom' | 'slide-right',
  }

  withDefaults(
    defineProps<Props>(),
    {
      xPos: 'center',
      yPos: 'center',
      animation: 'zoom',
    },
  );

  const screen = useAppScreen();
  const screenHeight = computed(() => screen.height + 'px');

  const value = defineModel<boolean>({
    default: false,
  });

  const isLeaved = ref(!value.value);

  watch(value, (v) => {
    if(v) isLeaved.value = false;
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
    height: v-bind(screenHeight);
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

  .zoom-enter-active {
    animation: zoomIn;
    animation-duration: var(--duration, 400ms);
  }

  .zoom-leave-active {
    animation: zoomOut;
    animation-duration: var(--duration, 400ms);
  }

  .slide-right-enter-active {
    animation: slideInRight;
    animation-duration: var(--duration, 400ms);
  }

  .slide-right-leave-active {
    animation: slideOutRight;
    animation-duration: var(--duration, 400ms);
  }

  :slotted(.wrap > div) {
    pointer-events: all;
    will-change: scroll-position;
    overflow: auto;
    max-height: calc(100vh - var(--p, 16px));
    max-height: calc(v-bind(screenHeight) - var(--p, 16px));
  }
</style>
