import type { AxiosInstance } from 'axios';
import { jsonFormData } from '@/shared/lib';

export default function(http: AxiosInstance) {
  return {
    sectionsAll() {
      return http<Section[]>('b_menu_sections.php');
    },
    showSection(id: number | string) {
      return http<[ SectionShowed ]>('b_menu_section.php', {
        params: {
          id,
        }
      });
    },
    subsectionElements(id: number | string) {
      return http<[ SubsectionShowed ]>('b_menu_subsection.php', {
        params: {
          id,
        }
      });
    },
    createBasket() {
      return http.post<BasketCreateSuccess>('create_basket_b.php');
    },
    appendElement(params: BasketItemParams) {
      return http.post<BasketItem[]>('add2basket_b.php', jsonFormData(params));
    },
    reduceElement(params: BasketItemParams) {
      return http.post<BasketItem[]>('removefrombasket_b.php', jsonFormData(params));
    },
    clearBasket(id: number | string) {
      return http('clear_basket_b.php', {
        params: {
          id,
        }
      });
    },
  }
}

export interface Section {
  name: string,
  id: string,
  code: string,
}

export interface Dir {
  id: string,
  name: string,
}

export interface SectionShowed {
  dirs: Dir[],
  elements: Element[],
}

export interface SubsectionShowed {
  elements: Element[],
}

export interface Element {
  name: string,
  id: string,
  price: string,
  ves: string,
  persons: string,
  add_text: string,
  img: string
}

export type BasketItemParams = {
  basket_id: number | string,
  good_id: number | string,
}

export type BasketCreateSuccess = [ { id: number } ];

export interface BasketItem {
  name: string,
  img: string,
  good_id: string,
  price: string,
  count: string,
};