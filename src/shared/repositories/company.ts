import type { AxiosInstance } from 'axios';
import type { MenuElement } from './menu';
import type { Image } from '@/shared/api/types/backend';

export default function(http: AxiosInstance) {
  return {
    counter() {
      return http<CompanyCounter>('company_counter.php');
    },
    gallery() {
      return http<CompanyGalleryItem[]>('company_gallery.php');
    },
    partners() {
      return http<CompanyPartner[]>('company_partners.php');
    },
    team() {
      return http<CompanyTeamItem[]>('company_team.php');
    },
    sets() {
      return http<MenuElement[]>('company_sety.php');
    },
  }
};

export interface CompanyCounter {
  'let': string;
  meropr: string;
  dostavok: string;
  person: string;
}
export type CompanyGalleryItem = {
  id: string,
  img: Image,
}

export type CompanyPartner = CompanyGalleryItem;

export interface CompanyTeamItem {
  id:      string;
  fio:     string;
  vacancy: string;
  img: Image,
}
