<template>
  <Alerts />
  <ProgressIndicator :loading="pending" />
  
  <CallbackModalOther />
  <router-view v-slot="{ Component }">
    <template v-if="Component">
      <Suspense @pending="pending = true" @resolve="pending = false">
        <component :is="layouts[appStore.layout]">
          <Suspense suspensible @pending="pending = true" @resolve="pending = false">
            <template #default>
              <component :is="Component"></component>
            </template>
          </Suspense>
        </component>
        <template #fallback>
          <div class="loader">
            <AppSpinner size="100px" />
          </div>
        </template>
      </Suspense>
    </template>
  </router-view>
</template>

<script setup lang="ts">
  import { useBasketStore } from './shared/store/basket';
  import Alerts from '@/shared/ui/Alerts/index.vue';
  import { PrimaryLayout } from '@/layouts/Primary';
  import { OrderLayout } from '@/layouts/Order';
  import { BanquetLayout } from '@/layouts/Banquet';
  import { ref, watch } from 'vue';
  import { useAppStore } from '@/shared/store/app';
  import ProgressIndicator from '@/app/ui/ProgressIndicator.vue';
  import { useRoute } from 'vue-router';
  import { CallbackModal, CallbackModalOther } from '@/widgets/Callback';
  

  const layouts = {
    'default': PrimaryLayout,
    'order': OrderLayout,
    'banquet': BanquetLayout,
  };

  const route = useRoute();

  const appStore = useAppStore();

  const pending = ref(false);

  const { init } = useBasketStore();

  init();

  watch(() => route.meta.layout, (layout) => {
    appStore.setLayout(layout as any);
  }, { immediate: true });
</script>

<style scoped lang="scss">
  .loader {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
