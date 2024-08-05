import boot from '../lib/boot';
import { Icon, ButtonRound, Logo, Button } from '@/shared/ui';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default boot((app) => {
  app.component('AppIcon', Icon);
  app.component('ButtonRound', ButtonRound);
  app.component('AppLogo', Logo);
  app.component('AppButton', Button);
  app.component('AppButton', Button);
  app.component('Swiper', Swiper);
  app.component('SwiperSlide', SwiperSlide);
});
