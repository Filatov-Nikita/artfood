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
    }
  },
}
