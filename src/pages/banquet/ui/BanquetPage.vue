<template>
  <main class="page--py">
    <div class="wrapper">
      banquet
      <RouterView v-slot="{ Component }">
        {{ cacheComponent(Component) }}
        <component v-if="CachedComponent" :is="CachedComponent" />
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
