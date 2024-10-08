import type { RouteLocationRaw } from 'vue-router';

type Color = 'red' | 'yellow' | 'orange';

export type MenuItem = {
  name: string,
  priceFrom: string,
  color: Color,
  to: RouteLocationRaw,
};

const items: MenuItem[] = [
  {
    name: 'Сеты',
    priceFrom: 'от 1 300 ₽',
    color: 'red',
    to: { name: 'menu.section.index', params: { section: 'sety' } },
  },
  {
    name: 'Меню',
    priceFrom: 'от 250 ₽',
    color: 'yellow',
    to: { name: 'menu.section.index', params: { section: 'sety' } },
  },
  {
    name: 'Кейтеринг',
    priceFrom: 'от 2 000 ₽ / персона',
    color: 'orange',
    to: { name: 'home' },
  },
];

export default items;
