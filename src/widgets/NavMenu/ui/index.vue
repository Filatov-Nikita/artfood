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
                v-for="link in links.primary"
                type="primary"
                v-bind="link"
              />
            </div>
            <div class="nav-menu__nav-secondary">
              <Item
                v-for="link in links.secondary"
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
  import contacts from '../model/contacts';
  import { RouteLocationRaw } from 'vue-router';

  const props = defineProps<{
    showed: boolean,
    headerSelector: string,
  }>();

  const emit = defineEmits<{
    (event: 'showBanquet'): void,
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
    const scrollOffClass = ['tw-overflow-hidden', 'tw-bg-overlay'];
    if(val) {
      body.classList.add(...scrollOffClass);
    } else {
      body.classList.remove(...scrollOffClass);
    }
  }

  watch(() => props.showed, (val) => {
    initHeaderHeight();
    scrollToggle(val);
  });

  type NavLink = {
    label: string,
    to?: RouteLocationRaw,
    action?: () => void,
  };

  type Links = {
    primary: NavLink[],
    secondary: NavLink[],
  }

  const links: Links = {
    primary: [
      {
        label: 'Меню',
        to: { name: 'menu.section.index', params: { section: 'sety' } },
      },
      {
        label: 'Банкетное меню',
        action() {
          emit('showBanquet');
        }
      },
      {
        label: 'Кейтеринг',
        to: { name: 'catering' },
      },
      {
        label: 'Залы для мероприятий',
        to: { name: 'halls' },
      },
    ],
    secondary: [
      {
        label: 'Программы питания',
        to: { name: 'programs' },
      },
      {
        label: 'Портфолио',
        to: { name: 'portfolio' },
      },
      {
        label: 'Оплата и доставка',
        to: { name: 'payment' },
      },
      {
        label: 'О компании',
        to: { name: 'about' },
      },
    ],
  };
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
        width: 205px;
        height: 328px;
        background-image: url('./assets/bg-small.png');
        background-repeat: no-repeat;
        background-size: contain;
        position: absolute;
        z-index: 0;
        right: 0px;
        bottom: 0px;

        @include lg {
          background-position:center;
          top: 0px;
          left: -50px;
          right: auto;
          bottom: auto;
          width: 380px;
          height: 100%;
        }
      }
    }

    &__nav-wrap {
      position: relative;
      z-index: 1;
      height: 100%;
      max-height: 100%;
      overflow: auto;
      display: flex;
      flex-direction: column;
      gap: 16px;

      @include lg {
        max-width: 440px;
        margin-left: auto;
        justify-content: center;
      }

      @include xl {
        max-width: 640px;
      }
    }

    &__nav-primary {

    }

    &__nav-secondary {

    }

    &__phone-wrap {
      margin-top: auto;
      padding: 16px 0;

      @include lg {
        display: none;
      }
    }

    &__phone {
      @apply tw-text-body-m-bold tw-text-white;
    }
  }
</style>
