import type { AxiosInstance } from 'axios';
import createMenuRepo from './menu';
import { type InjectionKey, inject } from 'vue';

export default function initRepositories(http: AxiosInstance) {
  return {
    menu: createMenuRepo(http),
  }
}

export const repositiriesKey: InjectionKey<ReturnType<typeof initRepositories>> = Symbol();

export function useRepositories() {
  const repo = inject(repositiriesKey);
  if(!repo) throw new Error('repositories не найден!');
  return repo;
}
