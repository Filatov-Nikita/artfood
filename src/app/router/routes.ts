export default function createRoutes() {
  const routes = [
    {
      path: '/',
      component: () => import('@/pages/home/ui/HomePage.vue'),
      name: 'home',
    },
    {
      path: '/debug',
      children: [
        {
          path: 'icons',
          component: () => import('@/pages/debug/icons/ui/IconsPage.vue'),
          name: 'debug.icons',
        }
      ],
    },
  ];

  return routes;
}