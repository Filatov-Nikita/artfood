import { BaseOpts, Theme } from '../types';
import { computed, Ref } from 'vue';

export default function(themeVal: Ref<BaseOpts['theme']>) {
  const theme = computed<Theme>(() => {
    if(!themeVal.value) return 'primary';
    return themeVal.value;
  });

  return {
    theme,
  }
}
