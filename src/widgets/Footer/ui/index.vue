<template>
  <footer class="footer">
    <div class="footer__decor-wrap">
      <picture>
        <source width="654" height="148" media="(max-width: 799px)" srcset="./assets/decor-sm.png" />
        <source width="2040" height="459" media="(min-width: 800px)" srcset="./assets/decor-xl.png" />
        <img width="2040" height="459" class="footer__decor" src="./assets/decor-xl.png" alt="декор" loading="lazy" />
      </picture>
    </div>
    <div class="footer__wrap">
      <div class="footer__row1">
        <router-link class="footer__home" :to="{ name: 'home' }">
          <AppLogo class="footer__logo" color="white" />
        </router-link>
        <div class="footer__col-wrap">
          <nav class="footer__nav">
            <NavItem
              class="footer__link"
              v-for="link in navLinks"
              v-bind="link"
            />
          </nav>
        </div>
      </div>
      <div class="footer__row2">
        <div class="footer__contacts-wrap">
          <div class="footer__phone-wrap">
            <a class="footer__phone" :href="`tel:${contacts.phone}`">{{ contacts.phone }}</a>
          </div>
          <div class="footer__contacts">
            <div class="footer__contact-row">
              {{ contacts.address }}
            </div>
            <div class="footer__contact-row">
              {{ contacts.worktime }}
            </div>
            <div class="footer__contact-row">
              <a class="footer__email" :href="`mailto:${contacts.email}`">{{ contacts.email }}</a>
            </div>
          </div>
        </div>
        <div class="footer__col-wrap">
          <AppButton theme="primary" leftIcon="whatsapp-logo-regular" size="48" :model="{ is: 'link-native', href: contacts.wa }" target="_blank">
            Написать нам
          </AppButton>
        </div>
      </div>
      <div class="footer__row3">
        <div class="footer__info">{{ infoLabel }}</div>
        <div class="footer__docs">
          <div class="footer__doc-link-wrap">
            <a class="footer__doc-link" :href="docs.conf.path">Политика конфиденциальности</a>
          </div>
          <div class="footer__doc-link-wrap">
            <a class="footer__doc-link" :href="docs.sogl.path">Пользовательское соглашение</a>
          </div>
        </div>
        <div class="footer__logo-yes-wrap">
          <img class="footer__logo-yes" width="104" height="44" src="./assets/logo-yes.svg" alt="logo yes">
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import NavItem from './NavItem.vue';
  import { useCurrentDate } from '@/shared/lib';
  import navLinks from '../model/navLinks';
  import contacts from '../model/contacts';
  import docs from '../model/docs';

  const { year } = useCurrentDate();

  const infoLabel = `© ${ year } Art Food — ресторан доставки здоровой еды`;
</script>

<style scoped lang="scss">
  .footer {
    padding: 0 24px 32px;
    @apply tw-bg-neutral-primary tw-rounded-1.5xl;

    @include lg {
      padding: 0 32px 32px;
    }

    &__decor-wrap {
      transform: translateY(-8px);
      margin-bottom: -8px;
    }

    &__decor {
      margin-bottom: 30px;

      @include lg {
        margin-bottom: 40px;
      }
    }

    &__wrap {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }

    &__home {
      display: block;
      width: fit-content;
      margin-bottom: 40px;
    }

    &__logo {
      width: 107px;
    }

    &__col-wrap {
      @include lg {
        max-width: 640px;
      }

      @include xl {
        width: 100%;
      }
    }

    &__row1 {
      @include lg {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    }

    &__row2 {
      @include lg {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    }

    &__row3 {
      padding-top: 16px;
      border-top: 1px solid theme('colors.text01');

      @include xl {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        column-gap: 80px;
      }
    }

    &__info {
      margin-bottom: 24px;
      @apply tw-text-text02 tw-text-body-s-regular;

      @include xl {
        flex-grow: 1;
        margin-bottom: 0px;
      }
    }

    &__nav {
      display: flex;
      flex-direction: column;
      gap: 20px;

      @include lg {
        flex-direction: row;
        flex-wrap: wrap;
      }
    }

    &__contacts-wrap {
      margin-bottom: 24px;

      @include lg {
        margin-bottom: 0px;
      }
    }

    &__contact-row {
      @apply tw-text-body-s-medium tw-text-text02;

      & + & {
        margin-top: 2px;
      }
    }

    &__phone-wrap {
      margin-bottom: 8px;
    }

    &__phone {
      @apply tw-text-body-m-bold tw-text-white;

      @include lg {
        &:hover {
          opacity: 0.7;
        }
      }
    }

    &__email {
      @include lg {
        &:hover {
          opacity: 0.7;
        }
      }
    }

    &__logo-yes {
      width: 104px;
    }

    &__docs {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-bottom: 24px;

      @include lg {
        flex-direction: row;
      }

      @include xl {
        margin-bottom: 0px;
      }
    }

    &__doc-link {
      @apply tw-text-body-s-bold tw-text-text02;

      @include lg {
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
</style>
