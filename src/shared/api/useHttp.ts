import { inject, type InjectionKey } from 'vue';
import axios, { type AxiosInstance} from 'axios';

export const exposedSymbol: InjectionKey<{
  http: AxiosInstance,
}> = Symbol();

export const baseURL = 'http://artfood.yes-idea.ru/api';

export function init() {
  const http = axios.create({
    baseURL,
  });

  const exposed = {
    http,
  };

  return exposed;
}

export default function() {
  const exposed = inject(exposedSymbol);
  if(!exposed) throw new Error('http не найден!');
  return exposed;
}
