import boot from '../lib/boot';
import { Icon } from '@/shared/ui';


export default boot((app) => {
  app.component('AppIcon', Icon);
});
