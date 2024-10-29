import { computed, type Ref } from 'vue';
import { useAppConfig } from '@/shared/config/app';

export default function(img: Ref<string>) {
  const config = useAppConfig();

  const url = computed(() => {
    return config.imgBase + img.value;
  });

  return {
    url,
  }
}
