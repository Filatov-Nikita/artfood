import type { AxiosInstance } from 'axios';
import type { WithPrefix } from '@/shared/api/types/backend';

export default function(http: AxiosInstance) {
  return {
    sectionsAll() {
      return http<MenuSection[]>('menu_sections.php');
    },
    sectionsMainAll() {
      return http<MenuSectionMain[]>('menu_sections_main.php');
    },
    elementsAll(params: ElementsAllParams) {
      return http<MenuElementWithSection[]>('menu_elements.php', {
        params
      });
    },
    show(id: number | string) {
      return http<[ MenuElementDetailed ]>('menu_element.php', {
        params: {
          id,
        }
      });
    },
  }
}

export type ElementsAllParams = Partial<{
  code: string,
  id: number | string,
}>;

export interface MenuSection {
  name: string,
  id: string,
  code: string,
};

export interface MenuElement {
  name: string,
  id: string,
  tag: string | null,
  presons_count: string,
  ves: string,
  podpis: string | null,
  price: string,
  img: string | null
};

export type MenuElementWithSection = WithPrefix<'section_', MenuSection> & MenuElement;

export type MenuSectionMain = MenuSection & { goods: MenuElement[] };

export interface MenuElementDetailed {
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
