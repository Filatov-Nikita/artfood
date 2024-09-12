import { createApp } from 'vue';
import { amount, pretty } from './usePrettyAmount';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $amount: typeof amount;
    $formatValue: typeof pretty;
  }
}

export default {
  install(app: ReturnType<typeof createApp>) {
    app.config.globalProperties.$amount = amount;
    app.config.globalProperties.$formatValue = pretty;
  }
}
