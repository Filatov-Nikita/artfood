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
      path: '/portfolio',
      component: () => import('@/pages/portfolio/ui/PortfolioPage.vue'),
      name: 'portfolio',
    },
    {
      path: '/halls',
      component: () => import('@/pages/halls/ui/HallsPage.vue'),
      name: 'halls',
    },
    {
      path: '/programs',
      component: () => import('@/pages/programs/ui/ProgramsPage.vue'),
      name: 'programs',
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
