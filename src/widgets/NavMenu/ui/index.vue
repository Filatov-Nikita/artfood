<template>
  <Transition name="nav-menu">
    <div
      v-if="showed"
      class="nav-menu"
      :class="{ 'nav-menu--showed': showed }"
      :style="{ '--headerHeight': headerHeight + 'px' }"
    >
      <div class="wrapper tw-h-full">
        <div class="nav-menu__wrap">
          <div class="nav-menu__nav-wrap">
            <div class="nav-menu__nav-primary">
              <Item
                v-for="link in primaryLinks"
                type="primary"
                v-bind="link"
              />
            </div>
            <div class="nav-menu__nav-secondary">
              <Item
                v-for="link in secondaryLinks"
                type="secondary"
                v-bind="link"
              />
            </div>
            <div class="nav-menu__phone-wrap">
              <a class="nav-menu__phone" :href="`tel:${contacts.phone}`">{{ contacts.phone }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
  import { watch, onMounted, ref } from 'vue';
  import Item from './Item.vue';
  import navLinks from '../model/links';
  import contacts from '../model/contacts';

  const primaryLinks = navLinks.primary;
  const secondaryLinks = navLinks.secondary;

  const props = defineProps<{
    showed: boolean,
    headerSelector: string,
  }>();

  const headerHeight = ref(0);

  onMounted(() => {
    initHeaderHeight();
  });

  function initHeaderHeight() {
    const headerEl = document.querySelector(props.headerSelector);
    if(!headerEl) throw new Error(`${ props.headerSelector } не найден`);
    headerHeight.value = headerEl.scrollHeight;
  }

  function scrollToggle(val: boolean) {
    const body = document.body;
    const scrollOffClass = 'tw-overflow-hidden';
    if(val) {
      body.classList.add(scrollOffClass);
    } else {
      body.classList.remove(scrollOffClass);
    }
  }

  watch(() => props.showed, (val) => {
    initHeaderHeight();
    scrollToggle(val);
  });
</script>

<style scoped lang="scss">
  .nav-menu {
    --offset-b: 24px;

    &-leave-active {
      transition: opacity 200ms;
      opacity: 0;
    }

    &-enter-from {
      opacity: 0;
    }

    &-enter-active {
      transition: opacity 200ms;
    }

    &--showed {
      position: fixed;
      z-index: 9000;
      width: 100%;
      left: 0;
      top: var(--headerHeight);
      height: calc(100% - var(--headerHeight) - var(--offset-b));
    }

    &__wrap {
      padding: 24px;
      position: relative;
      height: 100%;
      @apply tw-rounded-1.5xl tw-bg-neutral-primary;

      &::after {
        content: '';
        display: block;
        width: 228px;
        height: 348px;
        background-image: url('./assets/bg-small.png');
        background-size: contain;
        position: absolute;
        z-index: 0;
        right: -26px;
        bottom: -20px;
      }
    }

    &__nav-wrap {
      height: 100%;
      max-height: 100%;
      overflow: scroll;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    &__nav-primary {

    }

    &__nav-secondary {

    }

    &__phone-wrap {
      margin-top: auto;
      padding: 16px 0;
    }

    &__phone {
      @apply tw-text-body-m-bold tw-text-white;
    }
  }
</style>
