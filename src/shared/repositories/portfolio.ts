import type { AxiosInstance } from 'axios';

export default function(http: AxiosInstance) {
  return {
    sectionsAll() {
      return http<PortfolioSection[]>('portfolio_sections.php');
    },
    elementsAll(sectionId: number | string) {
      return http<PortfolioElement[]>('portfolio_elements.php', {
        params: {
          id: sectionId,
        }
      });
    }
  }
}

export interface PortfolioSection {
  name: string,
  id: string
}

export interface PortfolioElement {
  name: string,
  id: string,
  text: string,
  img: string[],
}
