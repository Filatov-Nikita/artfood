<template>
  <Alerts />
  <ProgressIndicator :loading="pending" />
  <router-view v-slot="{ Component, route }">
    <template v-if="Component">
      <component :is="layouts[appStore.layout]">
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
        </component>
      </template>
    </router-view>
</template>

<script setup lang="ts">
  import { useBasketStore } from './shared/store/basket';
  import Alerts from '@/shared/ui/Alerts/index.vue';
  import { PrimaryLayout } from '@/layouts/Primary'
  import { ref } from 'vue';
  import { useAppStore } from '@/shared/store/app';
  import ProgressIndicator from '@/app/ui/ProgressIndicator.vue';
  import { useRouter } from 'vue-router';

  const layouts = {
    'default': PrimaryLayout,
    'order': OrderLayout,
  };

  const router = useRouter();
  router.beforeResolve((to) => {
    appStore.setLayout(to.meta.layout as any);
  });

  const appStore = useAppStore();

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
