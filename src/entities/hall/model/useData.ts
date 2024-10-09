import useHttp from "@/shared/api/useHttp";
import { ref } from 'vue';

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

export default function() {
  const { http } = useHttp();

  const halls = ref<Hall[]>([]);

  async function getHalls() {
    const res = await http.get<Hall[]>('banquets.php');
    halls.value = res.data;
  }

  return {
    halls,
    getHalls,
  }
}
