<template>
  <div v-if="!isLeaved" class="inner-dialog">
    <Transition name="bounce" appear @after-leave="isLeaved = true">
      <div class="dialog" v-if="value">
        <p class="title">{{ title }}</p>
        <div class="body">
          <slot />
        </div>
        <div class="actions">
          <AppButton design="secondary-neutral" size="48" @click="$emit('reject')">
            {{ rejectLabel }}
          </AppButton>
          <AppButton design="primary" size="48" @click="$emit('accept')">
            {{ acceptLabel }}
          </AppButton>
        </div>
      </div>
    </Transition>
    <div class="overlay"></div>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue';

  defineProps<{
    title: string,
    rejectLabel: string,
    acceptLabel: string,
  }>();

  defineEmits<{
    (event: 'reject'): void,
    (event: 'accept'): void,
  }>();

  const value = defineModel({ default: false });
  const isLeaved = ref(!value.value);

  watch(value, (v) => {
    if(v) isLeaved.value = false;
  });
</script>

<style scoped lang="scss">
  .inner-dialog {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 9000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    z-index: -1;
  }

  .dialog {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.08), -2px 9px 10px 0 rgba(0, 0, 0, 0.07), -4px 21px 13px 0 rgba(0, 0, 0, 0.03), -7px 37px 15px 0 rgba(0, 0, 0, 0.01), -12px 58px 17px 0 rgba(0, 0, 0, 0);
    @apply tw-rounded-xl tw-p-16 tw-bg-white;

  }

  .title {
    @apply tw-mb-8 tw-text-body-m-bold -tw-tracking-2;
  }

  .body {
    @apply tw-mb-16 tw-text-text01 tw-text-body-s-medium;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 8px;
  }

  .bounce-enter-active {
    animation: bounceIn;
    animation-duration: 400ms;
  }

  .bounce-leave-active {
    animation: zoomOut;
    animation-duration: 400ms;
  }
</style>
