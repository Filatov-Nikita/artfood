import { BaseOpts, Size } from '../types';
import { computed, Ref } from 'vue';

export default function(sizeVal: Ref<BaseOpts['size']>) {
  const size = computed<Size>(() => {
    if(!sizeVal.value) return '48';
    return sizeVal.value;
  });

  return {
    size,
  }
}
