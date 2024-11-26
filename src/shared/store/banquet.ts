import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useRepositories } from '@/shared/repositories';
import type { BasketItem } from '@/shared/repositories/basket';

export const useBanquetStore = defineStore('banquetStore', () => {
  const api = useRepositories();
  const basketId = ref<number | null>(null);
  const basket = ref<BasketItem[]>([]);

  async function createBasket() {
    const res = await api.banquet.createBasket();
    return res.data[0];
  }

  async function showBasket(basketId: number) {
    const res = await api.banquet.showBasket(basketId);
    return res.data;
  }

  async function init() {
    const _id = localStorage.getItem('banquetBasketId');
    if(!_id) {
      const res = await createBasket();
      remember(res.id);
    } else {
      basketId.value = parseInt(_id);
      basket.value = await showBasket(basketId.value);
    }
  }

  function remember(_basketId: number) {
    basketId.value = _basketId;
    localStorage.setItem('banquetBasketId', _basketId.toString());
  }

  function forgot() {
    basketId.value = null;
    localStorage.removeItem('banquetBasketId');
  }

  async function appendElement(productId: string) {
    if(!basketId.value) return;
    const { data } = await api.banquet.appendElement({
      basket_id: basketId.value,
      good_id: productId,
    });
    basket.value = data;
  }

  async function reduceElement(productId: string) {
    if(!basketId.value) return;
    const { data } = await api.banquet.reduceElement({
      basket_id: basketId.value,
      good_id: productId,
    });
    basket.value = data;
  }

  async function clearBasket() {
    if(!basketId.value) return;
    api.banquet.clearBasket(basketId.value);
    basket.value = [];
  }

  function getItem(productId: string): BasketItem | undefined {
    const item = basket.value.find(item => item.good_id === productId);
    return item;
  }

  return {
    basketId,
    basket,
    init,
    createBasket,
    remember,
    forgot,
    appendElement,
    reduceElement,
    clearBasket,
    getItem,
  }
});
