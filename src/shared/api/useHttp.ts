import { inject, type InjectionKey } from 'vue';
import axios, { type AxiosInstance} from 'axios';

export const exposedSymbol: InjectionKey<{
  http: AxiosInstance,
}> = Symbol();

export function init(baseURL: string) {
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
