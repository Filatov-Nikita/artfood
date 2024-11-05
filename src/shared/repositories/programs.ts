import type { AxiosInstance } from 'axios';

export default function(http: AxiosInstance) {
  return {
    sectionsAll() {
      return http<ProgramsSection[]>('programs_sections.php');
    },
    elementsAll(sectionId: number | string) {
      return http<ProgramsElement[]>('programs_elements.php', {
        params: {
          id: sectionId,
        }
      });
    },
    show(id: number | string) {
      return http<[ ProgramDetailed ]>('programs_detail.php', {
        params: {
          id,
        }
      });
    }
  }
}

export interface ProgramsSection {
  name: string,
  id: string
}

export interface ProgramsElement {
  name:  string,
  id:    string,
  price: string,
  days:  string,
  text:  string,
  img:   string,
}

export interface ProgramDetailed {
  name:         string,
  id:           string,
  price:        string,
  days:         string,
  calories:     string,
  belki:        string,
  giri:         string,
  uglevodi:     string,
  cel:          string,
  activity:     string,
  productivite: string,
  sodergit:     string,
  osobennosti:  string,
  text:         string | null,
  img:          string,
};
