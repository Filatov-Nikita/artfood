import type { AxiosInstance } from 'axios';

export default function(http: AxiosInstance) {
  return {
    all() {
      return http<Banner[]>('banners.php');
    }
  }
}

export interface Image {
  width: string,
  height: string,
  src: string,
}

export interface Banner {
  id:           string;
  pc_img:       Image;
  mobile_img:   Image;
  stroka1:      string;
  stroka2:      string;
  podstrochnic: string;
}
