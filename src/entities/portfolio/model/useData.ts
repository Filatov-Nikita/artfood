import useHttp from "@/shared/api/useHttp";
import { ref, watch } from 'vue';

export interface OneYear {
  name: string,
  id: string
}

export interface Case {
  name: string,
  id: string,
  text: string,
  img: string[],
}

export default function() {
  const { http } = useHttp();

  const years = ref<OneYear[]>([]);
  const cases = ref<Case[]>([]);
  const curYear = ref<OneYear | null>(null);

  async function getYears() {
    const res = await http.get<OneYear[]>('portfolio_sections.php');
    years.value = res.data;
    if(years.value.length > 0) curYear.value = years.value[0];
  }

  async function getCases(yearId: string) {
    const res = await http.get<Case[]>('portfolio_elements.php', {
      params: { id: yearId },
    });
    cases.value = res.data;
  }

  watch(curYear, (y) => {
    if(y) getCases(y.id);
  });

  return {
    years,
    cases,
    curYear,
    getYears,
    getCases,
  }
};
