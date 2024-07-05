import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/pages/home/ui/HomePage.vue'),
    name: 'home',
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
