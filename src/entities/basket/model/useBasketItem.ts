import { useBasketStore } from '@/shared/store/basket';
import { computed, Ref } from 'vue';

export default function(productId: Ref<string>) {
  const basketStore = useBasketStore();

  const item = computed(() => {
    return basketStore.getItem(productId.value);
  });

  const count = computed(() => {
    return parseInt(item.value?.count ?? '0');
  });

  return {
    item,
    count,
  }
}
