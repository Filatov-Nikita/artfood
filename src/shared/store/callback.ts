import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

export interface Meta {
  title: string,
  isInner: boolean
}

export const useCallbackStore = defineStore('callbackStore', () => {
  const showedCallback = ref(false);

  const meta: Meta = reactive({
    title: '',
    isInner: false,
  });

  function setMeta(_meta: Partial<Meta>) {
    Object.assign(meta, _meta);
  };

  function show(_meta: Partial<Meta> = {}) {
    showedCallback.value = true;
    setMeta({
      ..._meta,
      title: _meta.title ?? 'Связаться с менеджером',
    });
  };

  return {
    showedCallback,
    meta,
    setMeta,
    show,
  }
});
