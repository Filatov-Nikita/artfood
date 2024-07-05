import { createApp } from 'vue';
import App from './App.vue';
import registerComponents from './app/boot/registerComponents';
import registerValidationRules from './app/boot/registerValidationRules';
import './assets/scss/app.scss';
import { router } from './app/router';
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();

app
.use(router)
.use(pinia);

registerComponents(app);
registerValidationRules(app);

app.mount('#app');
