import { createApp } from 'vue';
import App from './App.vue';
import './app/boot/registerComponents';
import './assets/scss/app.scss';
import { router } from './app/router';
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();

app
.use(router)
.use(pinia)
.mount('#app');
