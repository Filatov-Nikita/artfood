import useHttp from '@/shared/api/useHttp';
import { ref } from 'vue';

export default function() {
  const { http } = useHttp();

  const data = ref<ProgramDetailed | null>(null);

  async function load(id: string | number) {
    const res = await http.get<ProgramDetailed[]>('programs_detail.php', {
      params: {
        id,
      },
    });
    data.value = res.data[0];
  }

  return {
    data,
    load,
  }
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
