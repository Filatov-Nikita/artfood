<template>
  <Alerts />
  <ProgressIndicator :loading="pending" />
  <router-view v-slot="{ Component, route }">
    <template v-if="Component">
      <PrimaryLayout>
        <Suspense @pending="pending = true" @resolve="pending = false">
            <template #default>
              <component :is="Component" :key="route.path"></component>
            </template>
            <template #fallback>
              <div class="loader">
                <AppSpinner size="100px" />
              </div>
            </template>
          </Suspense>
        </PrimaryLayout>
      </template>
    </router-view>
</template>

<script setup lang="ts">
  import { useBasketStore } from './shared/store/basket';
  import Alerts from '@/shared/ui/Alerts/index.vue';
  import { PrimaryLayout } from '@/layouts/Primary'
  import { ref } from 'vue';
  import ProgressIndicator from '@/app/ui/ProgressIndicator.vue';

  const pending = ref(false);

  const { init } = useBasketStore();

  init();
</script>

<style scoped lang="scss">
  .loader {
    width: 100%;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
