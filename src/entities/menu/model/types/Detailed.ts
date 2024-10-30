import { MenuElement } from '@/shared/api/models/MenuElement';

export interface Detailed {
  name: string,
  id: string,
  tag: string,
  presons_count: string,
  ves: string,
  podpis: string,
  price: string,
  img: string,
  additional_imgs: string[],
  belki: string,
  giri: string,
  uglevodi: string,
  cal: string,
  offers: [],
  reccomendations: MenuElement[],
};
