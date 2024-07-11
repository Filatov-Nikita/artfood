import { RouteLocationRaw } from 'vue-router';

export type Theme = 'primary' | 'secondary' | 'secondary-neutral' | 'outline' | 'outline-neutral' | 'ghost' | 'ghost-neutral';

export type Size = '36' | '48' | '56';

export type BaseOpts = {
  theme?: Theme,
  leftIcon?: string,
  rightIcon?: string,
  image?: string,
  size?: Size,
};

export type ButtonType = 'submit' | 'button';

export type ModelLink = {
  is: 'link',
  to: RouteLocationRaw,
};

export type ModelLinkNaive = {
  is: 'link-native',
  href: string,
};

export type ModelButton = {
  is: 'button',
  type?: ButtonType,
  disabled?: boolean,
}

export type ButtonProps = BaseOpts & {
  model?: ModelLink | ModelLinkNaive | ModelButton;
};
