import { createWebHistory, createRouter } from 'vue-router';
import createRoutes from './routes';

export default function() {
  const router = createRouter({
    history: createWebHistory(),
    routes: createRoutes(),
  });

  return router;
}
