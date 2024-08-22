import type { MenuElement } from '@/shared/api/models/MenuElement';
import type { MenuSection } from '@/shared/api/models/MenuSection';
import useHttp from '@/shared/api/useHttp';
import { ref, watch, type Ref } from 'vue';

type WithPrefix<P, O extends Record<string, any>> = {
  [
    K in keyof O
    as K extends string
    ? P extends string
      ? `${P}${K}` : never
    : never
  ]: O[K]
};

type ItemElement = WithPrefix<'section_', MenuSection> & MenuElement;

export default function(code: Ref<string>) {
  const { http } = useHttp();

  const items = ref<ItemElement[] | null>(null);

  async function load() {
    const res = await http.get<ItemElement[]>('menu_elements.php', {
      params: {
        code: code.value,
      }
    });

    items.value = res.data;
  }

  watch(code, () => load());

  return {
    items,
    load,
  }
}
