import {
  Icon,
  ButtonRound,
  Logo,
  Button,
  Input,
} from '@/shared/ui';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Field, Form } from 'vee-validate';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    AppIcon: typeof Icon,
    ButtonRound: typeof ButtonRound,
    AppLogo: typeof Logo,
    AppButton: typeof Button,
    AppInput: typeof Input,
    Swiper: typeof Swiper,
    SwiperSlide: typeof SwiperSlide,
    Form: typeof Form,
    Field: typeof Field,
  }
}
