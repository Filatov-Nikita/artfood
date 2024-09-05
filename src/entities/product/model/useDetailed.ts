import type { Detailed } from './types/Detailed';
import useHttp from '@/shared/api/useHttp';
import { ref } from 'vue';

export default function() {
  const { http } = useHttp();

  const data = ref<Detailed | null>(null);

  async function load(id: string | number) {
    const res = await http.get<Detailed[]>('menu_element.php', {
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
