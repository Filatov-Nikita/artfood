import boot from '../lib/boot';
import {
  Icon,
  ButtonRound,
  Logo,
  Button,
  Input
} from '@/shared/ui';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Field, Form } from 'vee-validate';

export default boot((app) => {
  app.component('AppIcon', Icon);
  app.component('ButtonRound', ButtonRound);
  app.component('AppLogo', Logo);
  app.component('AppButton', Button);
  app.component('AppInput', Input);
  app.component('Swiper', Swiper);
  app.component('SwiperSlide', SwiperSlide);
  app.component('Form', Form);
  app.component('Field', Field);
});
