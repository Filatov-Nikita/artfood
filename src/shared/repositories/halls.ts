import type { AxiosInstance } from 'axios';

export default function(http: AxiosInstance) {
  return {
    all() {
      return http<Hall[]>('banquets.php');
    }
  }
}

export interface Hall {
  name:    string;
  id:      string;
  price:   string;
  address: string;
  parking: string;
  kitchen: string;
  persons: string;
  img:     string[];
}
