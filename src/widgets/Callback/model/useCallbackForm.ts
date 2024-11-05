import { reactive } from 'vue';
import { string } from 'yup';

interface CallbackForm {
  name: string,
  phone: string,
  comment: string,
}

export default function() {
  const form: CallbackForm = reactive({
    name: '',
    phone: '',
    comment: '',
  });

  const schema = {
    name: string().required().label('Имя'),
    phone: string().required().label('Телефон'),
    comment: string().label('Комментарий'),
  };

  function reset() {
    Object.assign(form, {
      name: '',
      phone: '',
      comment: '',
    });
  }

  return {
    form,
    schema,
    reset,
  }
}
