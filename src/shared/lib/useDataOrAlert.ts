import useRequest from './useRequest';
import { watch } from 'vue';
import { AxiosError } from 'axios';
import { useAlertsStore } from '@/shared/store/alerts';

export default function<T>(res: Awaited<ReturnType<typeof useRequest<T, any>>>) {
  const alertsStore = useAlertsStore();

  watch(res.error, (e) => {
    if(!e) return;

    if(e instanceof AxiosError) {
      if(e.status === 500) {
        alertsStore.create({
          type: 'error',
          text: 'Произошла ошибка на сервере!',
        });
      } else {
        alertsStore.create({
          type: 'error',
          text: 'Не удалось выполнить запрос!',
        });
      }
    } else {
      alertsStore.create({
        type: 'error',
        text: 'Произошла неизвестная ошибка!',
      });
    }
  }, { immediate: true });

  return res;
}
