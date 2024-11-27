import { string } from 'yup';
import type { OrderBody } from '@/shared/repositories/banquet';
import { reactive } from 'vue';

export type FormCreate = Omit<OrderBody, 'basket_id'>;

export default function() {
  const schema = {
    name: string().required().label('Имя'),
    phone: string().required().label('Номер телефона'),
    address: string().required().label('Адрес'),
    date: string().required().label('Дата банкета'),
    comment: string().label('Комментарий'),
  };

  const form: FormCreate = reactive({
    name: '',
    phone: '',
    address: '',
    date: '',
    comment: '',
  });

  return {
    form,
    schema,
  }
}
