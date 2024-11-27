<template>
  <main class="page--py">
    <div class="wrapper">
      <RouterView v-slot="{ Component }">
        {{ cacheComponent(Component) }}
        <template v-if="Component || CachedComponent">
          <Suspense suspensible>
            <component :is="Component || CachedComponent" />
          </Suspense>
        </template>
      </RouterView>
    </div>
  </main>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useBanquetStore } from '@/shared/store/banquet';

  const CachedComponent = ref(null);

  function cacheComponent(Component: any) {
    CachedComponent.value = Component || CachedComponent.value;
  }

  const banketStore = useBanquetStore();

  await banketStore.init();
</script>
