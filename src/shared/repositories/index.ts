import type { AxiosInstance } from 'axios';
import { type InjectionKey, inject } from 'vue';
import createMenuRepo from './menu';
import createBasketRepo from './basket';
import createPortfolioRepo from './portfolio';
import createCompanyRepo from './company';
import createHallsRepo from './halls';
import createBannersRepo from './banners';
import createProgramsRepo from './programs';
import createOrdersRepo from './orders';

export default function initRepositories(http: AxiosInstance) {
  return {
    menu: createMenuRepo(http),
    basket: createBasketRepo(http),
    portfolio: createPortfolioRepo(http),
    company: createCompanyRepo(http),
    halls: createHallsRepo(http),
    banners: createBannersRepo(http),
    programs: createProgramsRepo(http),
    orders: createOrdersRepo(http),
  }
}

export const repositiriesKey: InjectionKey<ReturnType<typeof initRepositories>> = Symbol();

export function useRepositories() {
  const repo = inject(repositiriesKey);
  if(!repo) throw new Error('repositories не найден!');
  return repo;
}
