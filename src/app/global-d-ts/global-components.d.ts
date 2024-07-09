import { Icon, ButtonRound } from '@/shared/ui';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    AppIcon: typeof Icon,
    ButtonRound: typeof ButtonRound,
  }
}
