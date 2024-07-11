import { Icon, ButtonRound, Logo, Button } from '@/shared/ui';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    AppIcon: typeof Icon,
    ButtonRound: typeof ButtonRound,
    AppLogo: typeof Logo,
    AppButton: typeof Button,
  }
}
