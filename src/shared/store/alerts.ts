import { defineStore } from 'pinia';
import { ref } from 'vue';

export interface Item {
  key: number,
  type: 'success' | 'error',
  timeout?: number,
  title?: string,
  text?: string,
  icon?: string,
};

export const useAlertsStore = defineStore('alertsStore', () => {
  let inc = 0;

  const items = ref<Item[]>([]);

  function create(item: Partial<Item>) {
    const _item = createItem(item);
    items.value.push(_item);
    setTime(_item);
  };

  function createItem(item: Partial<Item>) {
    return {
      ...item,
      key: item.key ?? inc++,
      type: item.type ?? 'success',
    };
  }

  function setTime(item: Item) {
    setTimeout(() => {
      remove(item.key);
    }, item.timeout ?? 3000);
  }

  function remove(key: number) {
    items.value = items.value.filter(i => i.key !== key);
  };

  return {
    items,
    create,
    remove,
  }
});
