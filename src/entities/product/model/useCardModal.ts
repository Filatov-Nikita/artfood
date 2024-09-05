import { ref, watch } from 'vue';
import type { MenuElement } from '@/shared/api/models/MenuElement';
import { useDetailed } from '@/entities/product';

export default function() {
  const curProduct = ref<MenuElement | null>(null);

  const showedDetailed = ref(false);

  function changeProduct(pr: MenuElement) {
    curProduct.value = pr;
    showedDetailed.value = true;
  }

  const {
    data: productDetailed,
    load: loadProduct,
  } = useDetailed();

  watch(curProduct, (pr) => {
    if(pr) loadProduct(pr.id);
  });

  return {
    curProduct,
    showedDetailed,
    productDetailed,
    changeProduct,
  }
}
