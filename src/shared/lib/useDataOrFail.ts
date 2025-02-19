import useRequest from './useRequest';
import { watch, type Ref } from 'vue';

export default function<T>(res: Awaited<ReturnType<typeof useRequest<T, any>>>) {
  const { data, error } = res;

  if(error.value) {
    checkError(error.value);
  }

  watch(error, checkError);

  return data as Ref<T>;
}

function checkError(e: unknown) {
  console.log(e);
  throw new Error('Запрос завершился с ошибкой');
}
