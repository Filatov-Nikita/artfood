export default [
  {
    label: 'Меню',
    to: { name: 'menu.section.index', params: { section: 'sety' } },
  },
  {
    label: 'Банкетное меню',
    // to: { name: 'banquet.menu' },
    click: 'showCallback'
  },
  {
    label: 'Кейтеринг',
    to: { name: 'catering' },
  },
  {
    label: 'Залы для мероприятий',
    to: { name: 'halls' },
  }
];
