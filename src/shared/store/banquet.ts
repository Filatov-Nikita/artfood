import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useRepositories } from '@/shared/repositories';
import type { BasketItem, MiniBasket } from '@/shared/repositories/banquet';

export const useBanquetStore = defineStore('banquetStore', () => {
  const api = useRepositories();
  const basketId = ref<number | null>(null);
  const basket = ref<BasketItem[]>([]);
  const miniBasket = ref<MiniBasket | null>(null);
  const personsCount = ref(1);
  const hasItems = computed(() => basket.value.length > 0);

  async function createBasket() {
    const res = await api.banquet.createBasket();
    return res.data[0];
  }

  async function showBasket(basketId: number) {
    const res = await api.banquet.showBasket(basketId);
    basket.value = res.data;
    return res.data;
  }

  async function showMiniBasket(basketId: number, personsCount: number) {
    const res = await api.banquet.showMiniBasket(basketId, personsCount);
    miniBasket.value = res.data[0];
    return res.data;
  }

  async function init() {
    const _id = localStorage.getItem('banquetBasketId');
    if(!_id) {
      const res = await createBasket();
      await showMiniBasket(res.id, personsCount.value);
      remember(res.id);
    } else {
      basketId.value = parseInt(_id);
      await Promise.all([
        showBasket(basketId.value),
        showMiniBasket(basketId.value, personsCount.value),
      ]);
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
    setPersonsCount(1);
  }

  function getItem(productId: string): BasketItem | undefined {
    const item = basket.value.find(item => item.good_id === productId);
    return item;
  }

  function setPersonsCount(count: number) {
    personsCount.value = count;
  }

  return {
    basketId,
    basket,
    personsCount,
    miniBasket,
    hasItems,
    init,
    createBasket,
    remember,
    forgot,
    appendElement,
    reduceElement,
    clearBasket,
    getItem,
    setPersonsCount,
    showMiniBasket,
  }
});
