import { createApp } from 'vue';
import { createRouter } from 'vue-router';
import type { AxiosInstance} from 'axios';

type App =  ReturnType<typeof createApp>;
type Router =  ReturnType<typeof createRouter>;

export default function(fn: (app: App, router: Router, http: AxiosInstance) => any) {
  return function(app: App, router: Router, http: AxiosInstance): void {
    fn(app, router, http);
  }
}
