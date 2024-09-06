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
    const { data } = await http.post<Item>('add2basket.php', jsonFormData({
      basket_id: basketId.value,
      good_id: productId,
    }));
    const ind = basket.value.findIndex(item => item.good_id === data.good_id);
    if(!ind) basket.value.push(data);
    else basket.value[ind] = data;
  }

  async function remove(productId: string) {
    if(!basketId.value) return;
    const { data } = await http.post<Item>('removefrombasket.php', jsonFormData({
      basket_id: basketId.value,
      good_id: productId,
    }));
    const ind = basket.value.findIndex(item => item.good_id === data.good_id);
    if(!ind) return;
    basket.value[ind] = data;
    basket.value = basket.value.filter(item => {
      return item.count !== '0';
    });
  }

  function getItem(productId: string): Item | undefined {
    const item = basket.value.find(item => item.good_id === productId);
    return item;
  }

  return {
    basketId,
    basket,
    total,
    init,
    create,
    remember,
    forgot,
    append,
    remove,
    getItem,
  }
});
