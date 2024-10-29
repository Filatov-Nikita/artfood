import type { AxiosInstance } from 'axios';
import { type InjectionKey, inject } from 'vue';
import createMenuRepo from './menu';
import createBasketRepo from './basket';

export default function initRepositories(http: AxiosInstance) {
  return {
    menu: createMenuRepo(http),
    basket: createBasketRepo(http),
  }
}

export const repositiriesKey: InjectionKey<ReturnType<typeof initRepositories>> = Symbol();

export function useRepositories() {
  const repo = inject(repositiriesKey);
  if(!repo) throw new Error('repositories не найден!');
  return repo;
}
