import type { AxiosInstance } from 'axios';
import { jsonFormData } from '@/shared/lib';

export default function(http: AxiosInstance) {
  return {
    show(id: number | string) {
      return http<BasketItem[]>('show_basket.php', {
        params: {
          id,
        }
      });
    },
    create() {
      return http<BasketCreateSuccess>('create_basket.php');
    },
    append(params: BasketItemParams) {
      return http.post<BasketItem[]>('add2basket.php', jsonFormData(params));
    },
    reduce(params: BasketItemParams) {
      return http.post<BasketItem[]>('removefrombasket.php', jsonFormData(params));
    },
    remove(params: BasketItemParams) {
      return http.post<BasketItem[]>('clear_good_basket.php', jsonFormData(params));
    },
    clear(id: number | string) {
      return http('clear_basket.php', {
        params: {
          id,
        }
      });
    },
  }
};

export type BasketItemParams = {
  basket_id: number | string,
  good_id: number | string,
}

export interface BasketItem {
  name: string,
  img: string,
  good_id: string,
  price: string,
  count: string,
};

export type BasketCreateSuccess = [ { id: number } ];
