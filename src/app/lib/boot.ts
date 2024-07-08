import { createApp } from 'vue';
import { createRouter } from 'vue-router';

type App =  ReturnType<typeof createApp>;
type Router =  ReturnType<typeof createRouter>;

export default function(fn: (app: App, router: Router) => any) {
  return function(app: App, router: Router): void {
    fn(app, router);
  }
}
