import type { SwiperOptions } from 'swiper/types';

export interface Points {
  lg?: SwiperOptions,
  xl?: SwiperOptions,
}

export default function(opts: Points) {
  const map = {
    lg: 1024,
    xl: 1440,
  };

  const res: SwiperOptions['breakpoints'] = {};

  let key: keyof Points;
  for(key in opts) {
    res[map[key]] = opts[key]!;
  }

  return res;
}
