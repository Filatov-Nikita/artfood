import { Icon, ButtonRound, Logo, Button } from '@/shared/ui';
import { Swiper, SwiperSlide } from 'swiper/vue';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    AppIcon: typeof Icon,
    ButtonRound: typeof ButtonRound,
    AppLogo: typeof Logo,
    AppButton: typeof Button,
    Swiper: typeof Swiper,
    SwiperSlide: typeof SwiperSlide,
  }
}
