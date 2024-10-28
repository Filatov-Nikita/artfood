<template>
  <header class="header">
    <div class="header__wrap">
      <div class="header__head-wrap">
        <div class="header__head">
          <div class="header__links">
            <a class="header__link header__link--wa" :href="contacts.wa.path" target="_blank">WhatsApp</a>
            <a class="header__link header__link--tg" :href="contacts.tg.path" target="_blank">Telegram</a>
          </div>
          <span class="header__separator">∙</span>
          <div class="header__time">
            Время работы: {{ contacts.worktime }}
          </div>
        </div>
        <div class="header__phone-wrap">
          <a class="header__phone":href="`tel:${contacts.phone}`">{{ contacts.phone }}</a>
        </div>
      </div>

      <div class="header__toolbar">
        <router-link class="header__logo-link" :to="{ name: 'home' }">
          <AppLogo class="header__logo" />
        </router-link>
        <div v-show="!showedMenu" class="header__nav-wrap">
          <nav class="header__nav">
            <router-link
              class="header__nav-link"
              v-for="link in links"
              :to="link.to"
            >{{ link.label }}</router-link>
          </nav>
        </div>
        <div class="header__actions">
          <ButtonState :hasItems="hasItems" @click="$emit('showBasket')" />
          <ButtonRound
            size="40px"
            :icon="showedMenu ? 'x-regular' : 'list-regular'"
            @click="$emit('update:showedMenu', !showedMenu)"
          ></ButtonRound>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { useBasketStore } from '@/shared/store/basket';
  import contacts from '../model/contacts';
  import { ButtonState } from '@/entities/basket';
  import { storeToRefs } from 'pinia';
  import links from '../model/links';

  defineProps<{
    showedMenu: boolean,
  }>();

  defineEmits<{
    (event: 'update:showedMenu', value: boolean): void,
    (event: 'showBasket'): void,
  }>();

  const { hasItems } = storeToRefs(useBasketStore());
</script>

<style scoped lang="scss">
  .header {
    @apply tw-bg-neutral tw-rounded-xl;

    &__wrap {
      padding: 8px 16px;
    }

    &__head-wrap {
      padding-bottom: 12px;
      border-bottom: 1px solid theme('colors.border01');

      @include lg {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
      }
    }

    &__head {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 4px;
      @apply tw-text-body-xs-medium;

      @include lg {
        @apply tw-text-body-s-medium;
      }
    }

    &__links {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    &__link {
      &--wa {
        @apply tw-text-primary;
      }

      &--tg {
        color: #19A1E6;
      }

      @include lg {
        &:hover {
          opacity: 0.7;
        }
      }
    }

    &__time {
      display: none;
      @apply tw-text-text00;

      @include lg {
        display: block;
      }
    }

    &__separator {
      display: none;
      @apply tw-text-text01;

      @include lg {
        display: block;
      }
    }

    &__toolbar {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      padding-top: 12px;
    }

    &__logo {
      width: 107px;
    }

    &__actions {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
    }

    &__nav-wrap {
      display: none;

      @include lg {
        display: block;
      }
    }

    &__nav {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }

    &__nav-link {
      @apply tw-text-body-m-bold -tw-tracking-2;

      &:hover {
        @apply tw-text-primary-hover;
      }
    }

    &__phone {
      display: none;

      @include lg {
        display: block;
        @apply tw-text-body-s-medium;

        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
</style>
