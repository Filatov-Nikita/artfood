import { Color } from '../types';
import { computed, Ref } from 'vue';

export default function(color: Ref<Color>) {
  const fill = computed(() => {
    return color.value === 'dark' ? '#272626' : '#FFFFFF';
  });

  return {
    fill,
  }
}
