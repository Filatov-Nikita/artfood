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
    showTotal(basketId: string | number) {
      return http<Total>('show_basket_b.php', {
        params: {
          id: basketId,
        }
      });
    },
    showBasket(basketId: string | number) {
      return http<BasketItem[]>('show_basket_b_full.php', {
        params: {
          id: basketId,
        }
      });
    },
    showMiniBasket(basketId: string | number, persons: string | number) {
      return http<[ MiniBasket ]>('mini_basket_b.php', {
        params: {
          id: basketId,
          persons,
        },
      })
    },
    createOrder(body: OrderBody) {
      const formData = jsonFormData(body);
      return http.post<OrderSuccess>('create_order_b.php', formData);
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

export type TotalSection = {
  id: string,
  name: string,
};

export type TotalItem = {
  id: string,
  price: number,
  ves: number,
  section: string,
  name: string,
};

export type Total = ([ TotalSection ] | TotalItem[])[];

export interface OrderBody {
  basket_id: number | string,
  name: string,
  phone: string,
  date: string,
  address: string,
  comment: string,
}

export type OrderSuccess = [ { order_id: number } ];

export interface MiniBasket {
  itogo: number,
  na_personu: number,
  obsh_vihod: number,
  st_na_personu: number,
};
