import { createApp } from 'vue';
import { createRouter } from 'vue-router';

export default function(fn: (...args: any[]) => any) {
  return function(app: ReturnType<typeof createApp>, router: ReturnType<typeof createRouter>): void {
    fn(app, router);
  }
}
