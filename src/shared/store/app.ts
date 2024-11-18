import { defineStore } from 'pinia';
import { ref } from 'vue';

export type LayoutName = 'default' | 'order' | 'banquet';

export const useAppStore = defineStore('appStore', () => {
  const layout = ref<LayoutName>('default');

  function setLayout(value: LayoutName | null) {
    layout.value = value ?? 'default';
  }

  return {
    layout,
    setLayout,
  }
});
