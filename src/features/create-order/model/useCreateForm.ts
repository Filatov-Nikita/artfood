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
    date: string().required().label('Дата'),
  };

  function today() {
    const dt = new Date();
    const d = dt.getDate();
    const m = dt.getMonth() + 1;
    return `${d > 10 ? d : `0${d}`}.${m > 10 ? m : `0${m}`}.${dt.getFullYear()}`;
  }

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
    date: today(),
    meta: { need_sdacha: '' }
  });

  return {
    form,
    schema,
  }
}
