import { createApp } from 'vue';
import App from '@/App.vue';
import registerComponents from '../boot/registerComponents';
import registerValidationRules from '../boot/registerValidationRules';
import createRouter from '../router';
import { createPinia } from 'pinia';
import { init as initHttp, exposedSymbol as httpKey } from '@/shared/api/useHttp';
import prettyAmount from '@/shared/plugins/prettyAmount';
import initRepositories, { repositiriesKey } from '@/shared/repositories';

export default function() {
  const app = createApp(App);
  const pinia = createPinia();
  const router = createRouter();

  app
  .use(router)
  .use(pinia)
  .use(prettyAmount);

  const api = initHttp();
  const repositiries = initRepositories(api.http);

  app.provide(httpKey, api);
  app.provide(repositiriesKey, repositiries);

  registerComponents(app, router, api.http);
  registerValidationRules(app, router, api.http);

  app.mount('#app');

  return app;
}
