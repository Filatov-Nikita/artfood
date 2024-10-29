import type { AxiosInstance } from 'axios';
import type { Image } from '@/shared/api/types/backend';

export default function(http: AxiosInstance) {
  return {
    all() {
      return http<Banner[]>('banners.php');
    }
  }
}

export interface Banner {
  id:           string;
  pc_img:       Image;
  mobile_img:   Image;
  stroka1:      string;
  stroka2:      string;
  podstrochnic: string;
}
