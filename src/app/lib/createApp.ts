import { createApp } from 'vue';
import App from '@/App.vue';
import registerComponents from '../boot/registerComponents';
import registerValidationRules from '../boot/registerValidationRules';
import createRouter from '../router';
import { createPinia } from 'pinia';

export default function() {
  const app = createApp(App);
  const pinia = createPinia();
  const router = createRouter();

  app
  .use(router)
  .use(pinia);

  registerComponents(app, router);
  registerValidationRules(app, router);

  app.mount('#app');

  return app;
}
