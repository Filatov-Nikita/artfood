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
  ToggleInput,
} from '@/shared/ui';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Field, Form } from 'vee-validate';
import SlideUpDown from 'vue-slide-up-down';

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
    SlideUpDown: typeof SlideUpDown,
    AppModal: typeof Modal,
    AppTabs: typeof Tabs,
    AppPlural: typeof Plural,
    InnerDialog: typeof InnerDialog,
    ToggleInput: typeof ToggleInput,
    AppTextarea: typeof Textarea,
  }
}
