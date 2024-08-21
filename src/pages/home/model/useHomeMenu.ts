import useHttp from '@/shared/api/useHttp';
import { ref } from 'vue';
import type { MenuElement } from '@/shared/api/models/MenuElement';
import type { MenuSection } from '@/shared/api/models/MenuSection';

export type HomeSection = MenuSection & { goods: MenuElement[] };

export default function () {
  const { http } = useHttp();

  const homeSections = ref<HomeSection[] | null>(null);

  async function load() {
    const res = await http.get<HomeSection[]>('menu_sections_main.php');
    homeSections.value = res.data;
  }

  return {
    homeSections,
    load,
  }
}
