import { createApp } from 'vue';
import App from './App.vue';
import './app/boot/registerComponents';
import './assets/scss/app.scss';

createApp(App).mount('#app');
