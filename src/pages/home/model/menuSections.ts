import type { RouteLocationRaw } from 'vue-router';

type Color = 'red' | 'yellow' | 'orange';

export type MenuItem = {
  name: string,
  priceFrom: string,
  color: Color,
  to: RouteLocationRaw,
  image: string,
};

const items: MenuItem[] = [
  {
    name: 'Сеты',
    priceFrom: 'от 1 300 ₽',
    color: 'red',
    to: { name: 'menu.section.index', params: { section: 'sety' } },
    image: '/images/menu-sections/sety.png',
  },
  {
    name: 'Меню',
    priceFrom: 'от 250 ₽',
    color: 'yellow',
    to: { name: 'menu.section.index', params: { section: 'sety' } },
    image: '/images/menu-sections/menu.png',
  },
  {
    name: 'Кейтеринг',
    priceFrom: 'от 2 000 ₽ / персона',
    color: 'orange',
    to: { name: 'catering' },
    image: '/images/menu-sections/keit.png',
  },
];

export default items;
