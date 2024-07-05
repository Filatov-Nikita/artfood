import { createApp } from 'vue';
import App from './App.vue';
import './app/boot/registerComponents';
import './assets/scss/app.scss';
import { router } from './app/router';

const app = createApp(App);

app
.use(router)
.mount('#app');
