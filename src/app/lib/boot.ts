import { createApp } from 'vue';

export default function(fn: (...args: any[]) => any) {
  return function(app: ReturnType<typeof createApp>): void {
    fn(app);
  }
}
