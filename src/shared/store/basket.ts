import { defineStore } from 'pinia';
import useHttp from '../api/useHttp';
import { ref, computed } from 'vue';
import { jsonFormData } from '@/shared/lib';

export interface Item {
  name: string,
  img: string,
  good_id: string,
  price: string,
  count: string,
};

export const useBasketStore = defineStore('basketStore', () => {
  const { http } = useHttp();

  const basketId = ref<number | null>(null);
  const basket = ref<Item[]>([]);
  const hasItems = computed(() => basket.value.length > 0);

  async function create() {
    const res = await http.get<[ { id: number } ]>('create_basket.php');
    return res.data[0];
  }

  async function show(_basketId: number): Promise<Item[]> {
    const res = await http.get<Item[]>('show_basket.php', {
      params: { id: _basketId },
    });
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
    const { data } = await http.post<Item[]>('add2basket.php', jsonFormData({
      basket_id: basketId.value,
      good_id: productId,
    }));
    basket.value = data;
  }

  async function reduce(productId: string) {
    if(!basketId.value) return;
    const { data } = await http.post<Item[]>('removefrombasket.php', jsonFormData({
      basket_id: basketId.value,
      good_id: productId,
    }));
    basket.value = data;
  }

  async function remove(productId: string) {
    if(!basketId.value) return;
    const { data } = await http.post<Item[]>('clear_good_basket.php', jsonFormData({
      basket_id: basketId.value,
      good_id: productId,
    }));
    basket.value = data;
  }

  async function clearAll() {
    if(!basketId.value) return;
    await http.get<Item[]>('clear_basket.php', {
      params: { id: basketId.value },
    });
    basket.value = [];
  }

  function getItem(productId: string): Item | undefined {
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
