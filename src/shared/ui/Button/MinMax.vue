<template>
  <div
    class="minmax"
    :class="[{ 'tw-cursor-pointer': count === 0 }, count === 0 ? 'minmax--zero' : 'minmax--active']"
    @click="onClick"
  >
    <button ref="removeRef" class="action" :class="{ 'tw-invisible': count === 0 }">
      <AppIcon class="icon icon--left" name="minus" />
    </button>
    <span class="price">
      {{ $amount(price) }}
    </span>
    <button ref="appendRef" class="action">
      <AppIcon class="icon" name="plus" />
    </button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const props = defineProps<{
    price: string,
    productId: string,
    count: number,
  }>();

  const emit = defineEmits<{
    (event: 'reduce', id: string): void,
    (event: 'append', id: string): void,
  }>();

  const removeRef = ref<HTMLElement | null>(null);
  const appendRef = ref<HTMLElement | null>(null);

  function onClick(e: Event) {
    const target = e.target as HTMLElement;
    if(target.closest('.action') === removeRef.value) emit('reduce', props.productId);
    else if(target.closest('.action') === appendRef.value) emit('append', props.productId);
    else if(props.count === 0) emit('append', props.productId);
  }
</script>

<style scoped lang="scss">
  .minmax {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    user-select: none;
    overflow: hidden;
    @apply tw-bg-neutral tw-rounded-full tw-text-body-m-bold;

    &--zero {
      @apply tw-bg-neutral;

      &:hover {
        @apply tw-bg-neutral-hover;
      }

      &:active {
        @apply tw-bg-neutral-press;
      }

      .action {
        @apply tw-text-text01;
      }
    }

    &--active {
      @apply tw-bg-primary tw-text-white;

      .action {
        transition: opacity 100ms;
        &:hover {
          background-color: #59ac44;
        }

        &:active {
          background-color: #4e993b;
        }
      }
    }
  }

  .action {
    padding: 16px 4px;
    flex-grow: 1;
  }

  .icon {
    display: block;
    width: 24px;
    height: 24px;

    &--left {
      margin-left: auto;
    }
  }
</style>
