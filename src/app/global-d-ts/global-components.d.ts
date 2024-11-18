import {
  Icon,
  ButtonRound,
  Logo,
  Button,
  Input,
  Modal,
  Tabs,
  TabItem,
  Plural,
  InnerDialog,
  PhoneInput,
  ToggleInput,
  Textarea,
  Spinner,
  ButtonClose,
  AppImg,
  ButtonNav,
} from '@/shared/ui';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Field, Form } from 'vee-validate';
import SlideUpDown from 'vue-slide-up-down';

declare module 'vue' {
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
    PhoneInput: typeof PhoneInput,
    ToggleInput: typeof ToggleInput,
    AppTextarea: typeof Textarea,
    AppSpinner: typeof Spinner,
    ButtonClose: typeof ButtonClose,
    AppImg: typeof AppImg,
    ButtonNav: typeof ButtonNav,
    TabItem: typeof TabItem,
  }
}
