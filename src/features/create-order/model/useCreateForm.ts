import type { YesNo } from '@/shared/api/models/Http';
import useHttp from '@/shared/api/useHttp';
import { useBasketStore } from '@/shared/store/basket';
import { string } from 'yup';
import jsonFormData from '@/shared/lib/jsonFormData';

export type TypeOfPayment = '5' | '6';
export type Location = '3' | '4';
export type TypeOfDelivery = '1' | '2';

export type SuccessRes = {
  order_id: number,
};

export interface OrderForm {
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
  meta: {
    need_sdacha: string,
  },
}

export default function() {
  const basketStore = useBasketStore();

  const schema = {
    name: string().required().label('Имя'),
    phone: string().required().label('Номер телефона'),
    address: string().required().label('Адрес'),
    flat: string().required().label('Квартира'),
    entrance: string().required().label('Подъезд'),
    floor: string().required().label('Этаж'),
    comment: string().label('Комментарий'),
    sdacha: string().label('Сдача')
  };

  const form: OrderForm = {
    name: '',
    phone: '',
    need_call: 'Нет',
    type_delivery: '1',
    timeline: '',
    location: '3',
    address: '',
    private_home: 'Нет',
    flat: '',
    entrance: '',
    floor: '',
    type_of_payment: '5',
    comment: '',
    sdacha: '',
    meta: { need_sdacha: '' }
  };

  const { http } = useHttp();

  async function createOrder(form: OrderForm, res: () => void) {
    const body = {
      basket_id: basketStore.basketId,
      ...form,
      timeline: '10:00 - 10:30',
    } as Record<string, unknown>;
    delete body['meta'];
    await http.post<SuccessRes>('create_order.php', jsonFormData(body));
    res();
  }

  return {
    form,
    schema,
    createOrder,
  }
}
