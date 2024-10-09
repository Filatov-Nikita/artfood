import { computed, type Ref } from 'vue';
import { baseURL } from '@/shared/api/useHttp';

export default function(img: Ref<string>) {
  const base = baseURL.replace('/api', '');

  const url = computed(() => {
    return base + img.value;
  });

  return {
    url,
  }
}
