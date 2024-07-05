export default function createRoutes() {
  const routes = [
    {
      path: '/',
      component: () => import('@/pages/home/ui/HomePage.vue'),
      name: 'home',
    },
  ];

  return routes;
}
