import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

export interface Meta {
  title: string,
  isInner: boolean,
  titleBtn: string,
  link?: string,
  link_title?:string
}

export const useCallbackStore = defineStore('callbackStore', () => {
  const showedCallback = ref(false);
  const showedCallbackOther = ref(false);

  const meta: Meta = reactive({
    title: '',
    isInner: false,
    titleBtn: '',
    link: '',
    link_title:''
  });

  function setMeta(_meta: Partial<Meta>) {
    Object.assign(meta, _meta);
  };

  function show(_meta: Partial<Meta> = {}) {
    showedCallback.value = true;
    console.log(showedCallback.value);
    
    setMeta({
      ..._meta,
      title: _meta.title ?? 'Связаться с менеджером',
    });
  };
  function showOther(_meta: Partial<Meta> = {}) {
  
    
    showedCallbackOther.value = true;
    setMeta({
      ..._meta,
      title: _meta.title ?? 'Связаться с менеджером',
      titleBtn: _meta.titleBtn ?? 'Отправить',
    });
  };

  return {
    showedCallback,
    showedCallbackOther,
    meta,
    setMeta,
    show,
    showOther
  }
});
