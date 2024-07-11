/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'text00': '#272626',
      'text01': '#868686',
      'text02': '#A9A9A9',
      'primary': '#52B738',
      'primary-hover': 'rgba(82, 183, 56, 0.7)',
      'primary-press': 'rgba(82, 183, 56, 0.8)',
      'primary-bg-disabled': 'rgba(168, 190, 176, 0.08)',
      'secondary': 'rgba(32, 161, 76, 0.12)',
      'secondary-hover': 'rgba(32, 161, 76, 0.18)',
      'secondary-press': 'rgba(32, 161, 76, 0.15)',
      'neutral-primary': '#343534',
      'neutral': '#F5F5F5',
      'neutral-hover': '#EAEAEA',
      'neutral-press': '#EFEFEF',
      'orange': '#FF8B20',
      'orange-10%': 'rgba(255, 139, 32, 0.1)',
      'yellow': '#FFCA44',
      'yellow-10%': 'rgba(255, 202, 68, 0.1)',
      'red': '#FF5346',
      'red-10%': 'rgba(255, 83, 70, 0.1)',
      'white': '#FFFFFF',
      'white-10%': 'rgba(255, 255, 255, 0.1)',
      'disabled-text': '#AAB7AE',
      'border00': '#F5F4F2',
      'border01': '#E3E3E3',
      'black-bg-34%': 'rgba(0, 0, 0, 0.34)',
    },
    fontSize: {
      'body-xs-regular': ['12px', {
        'lineHeight': '16px',
        'fontWeight': '400',
      }],
      'body-xs-medium': ['12px', {
        'lineHeight': '16px',
        'fontWeight': '500',
      }],
      'body-xs-bold': ['12px', {
        'lineHeight': '16px',
        'fontWeight': '700',
      }],
      'body-s-regular': ['14px', {
        'lineHeight': '22px',
        'fontWeight': '400',
      }],
      'body-s-medium': ['14px', {
        'lineHeight': '22px',
        'fontWeight': '500',
      }],
      'body-s-bold': ['14px', {
        'lineHeight': '22px',
        'fontWeight': '700',
      }],
      'body-m-regular': ['16px', {
        'lineHeight': '24px',
        'fontWeight': '400',
      }],
      'body-m-medium': ['16px', {
        'lineHeight': '24px',
        'fontWeight': '500',
      }],
      'body-m-bold': ['16px', {
        'lineHeight': '24px',
        'fontWeight': '700',
      }],
      'body-l-regular': ['20px', {
        'lineHeight': '26px',
        'fontWeight': '400',
      }],
      'body-l-medium': ['20px', {
        'lineHeight': '26px',
        'fontWeight': '500',
      }],
      'body-l-bold': ['20px', {
        'lineHeight': '26px',
        'fontWeight': '700',
      }],
      'heading-3-medium': ['24px', {
        'lineHeight': '32px',
        'fontWeight': '500',
      }],
      'heading-3-bold': ['24px', {
        'lineHeight': '32px',
        'fontWeight': '700',
      }],
      'heading-3-extrabold': ['24px', {
        'lineHeight': '32px',
        'fontWeight': '800',
      }],
      'heading-2-medium': ['32px', {
        'lineHeight': '38px',
        'fontWeight': '500',
      }],
      'heading-2-bold': ['32px', {
        'lineHeight': '38px',
        'fontWeight': '700',
      }],
      'heading-2-extrabold': ['32px', {
        'lineHeight': '38px',
        'fontWeight': '800',
      }],
      'heading-1-medium': ['48px', {
        'lineHeight': '54px',
        'fontWeight': '500',
      }],
      'heading-1-bold': ['48px', {
        'lineHeight': '54px',
        'fontWeight': '700',
      }],
      'heading-1-extrabold': ['48px', {
        'lineHeight': '54px',
        'fontWeight': '800',
      }],
      'display-48': ['48px', {
        'lineHeight': '90px',
      }],
      'display-72': ['72px', {
        'lineHeight': '90px',
      }],
      'display-96': ['96px', {
        'lineHeight': '96px',
      }],
    },
    borderRadius: {
      'xl': '16px',
      '1.5xl': '24px',
      'full': '999px',
    },
    spacing: {
      '0': '0px',
      '4': '4px',
      '8': '8px',
      '10': '10px',
      '12': '12px',
      '16': '16px',
      '18': '18px',
      '20': '20px',
      '24': '24px',
      '28': '28px',
      '30': '30px',
      '32': '32px',
      '36': '36px',
      '38': '38px',
      '40': '40px',
      '42': '42px',
      '48': '48px',
      '56': '56px',
      '64': '64px',
      '96': '96px',
    },
  },
}
