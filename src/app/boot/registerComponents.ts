import boot from '../lib/boot';
import {
  Icon,
  ButtonRound,
  Logo,
  Button,
  Input,
  Modal,
  Tabs,
  Plural,
  InnerDialog,
  PhoneInput,
  ToggleInput,
  Textarea,
  Spinner,
  ButtonClose,
} from '@/shared/ui';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Field, Form } from 'vee-validate';
//@ts-ignore
import SlideUpDown from 'vue-slide-up-down';

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
  app.component('SlideUpDown', SlideUpDown);
  app.component('AppModal', Modal);
  app.component('AppTabs', Tabs);
  app.component('AppPlural', Plural);
  app.component('InnerDialog', InnerDialog);
  app.component('PhoneInput', PhoneInput);
  app.component('ToggleInput', ToggleInput);
  app.component('AppTextarea', Textarea);
  app.component('AppSpinner', Spinner);
  app.component('ButtonClose', ButtonClose);
});
