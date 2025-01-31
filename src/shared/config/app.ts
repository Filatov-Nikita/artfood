import { inject, type InjectionKey } from 'vue';

export default function initConfig() {
  return {
    apiBase: import.meta.env.VITE_API_BASE as string ?? '',
    imgBase: import.meta.env.VITE_IMG_BASE as string ?? '',
    percHref: '#',
    polzSoglHref: '#',
    minOrderSum: 800,
    banquetMenuHref: '/docs/ArtFood_Menu_Furshet.pdf',
  }
}

export const configKey: InjectionKey<ReturnType<typeof initConfig>> = Symbol();

export function useAppConfig() {
  const config = inject(configKey);
  if(!config) throw new Error('config не найден!');
  return config;
}
