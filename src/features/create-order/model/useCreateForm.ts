import { string } from 'yup';
import type { OrderBody } from '@/shared/repositories/orders';
import { reactive } from 'vue';

export type FormCreate = Omit<OrderBody, 'basket_id'> & {
  meta: { need_sdacha: string },
};

export default function() {
  const schema = {
    name: string().required().label('Имя'),
    phone: string().required().label('Номер телефона'),
    address: string().required().label('Адрес'),
    flat: string().required().label('Квартира'),
    entrance: string().required().label('Подъезд'),
    floor: string().required().label('Этаж'),
    comment: string().label('Комментарий'),
    sdacha: string().required().label('Сдача'),
    timeline: string().required().label('Время'),
  };

  const form: FormCreate = reactive({
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
  });

  return {
    form,
    schema,
  }
}
