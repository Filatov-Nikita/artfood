export default function createRoutes() {
  const routes = [
    {
      path: '/',
      component: () => import('@/pages/home/ui/HomePage.vue'),
      name: 'home',
    },
    {
      path: '/menu/:section',
      component: () => import('@/pages/menu/ui/MenuPage.vue'),
      name: 'menu.section.index',
    },
    {
      path: '/about',
      component: () => import('@/pages/about/ui/AboutPage.vue'),
      name: 'about',
    },
    {
      path: '/order',
      component: () => import('@/pages/order/ui/OrderPage.vue'),
      name: 'order',
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
