import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useRepositories } from '@/shared/repositories';
import type { BasketItem } from '@/shared/repositories/basket';

export const useBasketStore = defineStore('basketStore', () => {
  const api = useRepositories();
  const basketId = ref<number | null>(null);
  const basket = ref<BasketItem[]>([]);
  const hasItems = computed(() => basket.value.length > 0);

  async function create() {
    const res = await api.basket.create();
    return res.data[0];
  }

  async function show(basketId: number) {
    const res = await api.basket.show(basketId);
    return res.data;
  }

  async function init() {
    const _id = localStorage.getItem('basketId');
    if(!_id) {
      const res = await create();
      remember(res.id);
    } else {
      basketId.value = parseInt(_id);
      basket.value = await show(basketId.value);
    }
  }

  function remember(_basketId: number) {
    basketId.value = _basketId;
    localStorage.setItem('basketId', _basketId.toString());
  }

  function forgot() {
    basketId.value = null;
    localStorage.removeItem('basketId');
  }

  const total = computed(() => {
    return basket.value.reduce((acc, item) => {
      acc += parseInt(item.count) * parseInt(item.price);
      return acc;
    }, 0)
  });

  async function append(productId: string) {
    if(!basketId.value) return;
    const { data } = await api.basket.append({
      basket_id: basketId.value,
      good_id: productId,
    });
    basket.value = data;
  }

  async function reduce(productId: string) {
    if(!basketId.value) return;
    const { data } = await api.basket.reduce({
      basket_id: basketId.value,
      good_id: productId,
    });
    basket.value = data;
  }

  async function remove(productId: string) {
    if(!basketId.value) return;
    const { data } = await api.basket.remove({
      basket_id: basketId.value,
      good_id: productId,
    });
    basket.value = data;
  }

  async function clearAll() {
    if(!basketId.value) return;
    api.basket.clear(basketId.value);
    basket.value = [];
  }

  function getItem(productId: string): BasketItem | undefined {
    const item = basket.value.find(item => item.good_id === productId);
    return item;
  }

  return {
    basketId,
    basket,
    total,
    hasItems,
    init,
    create,
    remember,
    forgot,
    append,
    reduce,
    getItem,
    remove,
    clearAll,
  }
});
