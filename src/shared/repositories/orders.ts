import type { AxiosInstance } from 'axios';
import type { YesNo } from '@/shared/api/types/backend';
import jsonFormData from '@/shared/lib/jsonFormData';

export default function(http: AxiosInstance) {
  return {
    create(body: OrderBody) {
      const formData = jsonFormData(body);
      return http.post<CreateSuccessRes>('create_order.php', formData);
    }
  }
}

export type TypeOfPayment = '5' | '6' | '7';
export type Location = '3' | '4';
export type TypeOfDelivery = '1' | '2';

export interface OrderBody {
  basket_id: number | string,
  name: string,
  phone: string,
  need_call: YesNo,
  type_delivery: TypeOfDelivery,
  timeline: string,
  location: Location,
  address: string,
  private_home: YesNo,
  flat: string,
  entrance: string,
  floor: string,
  type_of_payment: TypeOfPayment,
  comment: string,
  sdacha: string,
  date: string,
}

export type CreateSuccessRes = {
  order_id: number,
};
