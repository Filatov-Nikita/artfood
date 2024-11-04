import { ref } from 'vue';
import { useAlertsStore } from '@/shared/store/alerts';

export default function<K, T extends (body: K) => Promise<any>>(
  fetchFn: T,
  getBody: () => K,
  onSuccess: (res: ReturnType<T>) => void = () => {},
  errorText?: string
) {
  const alertsStore = useAlertsStore();
  const loading = ref(false);

  async function send() {
    try {
      loading.value = true;
      const res = await fetchFn(getBody());
      onSuccess(res);
      return res;
    } catch(e) {
      alertsStore.create({
        type: 'error',
        text: errorText ?? 'Не удалось выполнить запрос!',
      });
    } finally {
      loading.value = false;
    }
  }

  return {
    loading,
    send,
  }
}
