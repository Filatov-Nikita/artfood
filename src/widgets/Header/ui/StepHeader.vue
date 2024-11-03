<template>
  <header class="step-header">
    <ButtonNav v-if="!grid.lg" size="40px" type="prev" @click="$router.back" />
    <router-link class="step-header__logo-link" :to="{ name: 'home' }">
      <AppLogo class="header__logo" />
    </router-link>
    <div class="prev-step" v-if="grid.lg">
      <AppButton class="tw-shrink-0" leftIcon="arrow-left-regular" design="ghost-neutral" size="56" @click="$router.back">
        Назад
      </AppButton>
      <span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="2" fill="#868686"/>
        </svg>
      </span>
      <span>{{ prevStep }}</span>
    </div>
    <ButtonRound
      size="40px"
      :icon="showedMenu ? 'x-regular' : 'list-regular'"
      @click="$emit('update:showedMenu', !showedMenu)"
    ></ButtonRound>
  </header>
</template>

<script setup lang="ts">
  import { useAppGrid } from '@/shared/lib/useScreen';

  defineProps<{
    showedMenu: boolean,
    prevStep: string,
  }>();

  const grid = useAppGrid();
</script>

<style scoped lang="scss">
  .step-header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    @apply tw-px-16 tw-py-12 tw-bg-neutral tw-rounded-1.5xl;

    @include lg {
      @apply tw-px-32;
    }

    &__logo-link {
      width: 107px;
    }
  }

  .prev-step {
    display: flex;
    align-items: center;
    @apply tw-text-body-m-bold tw-text-text01 -tw-tracking-2;
  }
</style>
