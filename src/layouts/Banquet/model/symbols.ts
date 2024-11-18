import type { InjectionKey } from 'vue';

export const setTitleKey: InjectionKey<(newTitle: string) => void> = Symbol();
