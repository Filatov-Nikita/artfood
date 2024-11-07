import { createWebHistory, createRouter } from 'vue-router';
import createRoutes from './routes';

export default function() {
  const router = createRouter({
    history: createWebHistory(),
    routes: createRoutes(),
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { top: 0 }
      }
    },
  });

  return router;
}
