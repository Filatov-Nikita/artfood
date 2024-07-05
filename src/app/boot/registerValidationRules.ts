import boot from '../lib/boot';
import { defineRule, configure } from 'vee-validate';
import { localize } from '@vee-validate/i18n';
import { required, email } from '@vee-validate/rules';
import ru from '@vee-validate/i18n/dist/locale/ru.json';

export default boot(() => {
  configure({
    generateMessage: localize({
      ru,
    }),
  });

  defineRule('required', required);
  defineRule('email', email);
});
