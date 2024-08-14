import { createApp } from 'vue';
import App from '@/App.vue';
import registerComponents from '../boot/registerComponents';
import registerValidationRules from '../boot/registerValidationRules';
import createRouter from '../router';
import { createPinia } from 'pinia';
import { init as initHttp, exposedSymbol as httpKey } from '@/shared/api/useHttp';

export default function() {
  const app = createApp(App);
  const pinia = createPinia();
  const router = createRouter();

  app
  .use(router)
  .use(pinia);

  app.provide(httpKey, initHttp());

  registerComponents(app, router);
  registerValidationRules(app, router);

  app.mount('#app');

  return app;
}
