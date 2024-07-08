import { Icon } from '@/shared/ui';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    AppIcon: typeof Icon,
  }
}
