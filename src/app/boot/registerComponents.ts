import boot from '../lib/boot';
import { Icon, ButtonRound } from '@/shared/ui';


export default boot((app) => {
  app.component('AppIcon', Icon);
  app.component('ButtonRound', ButtonRound);
});
