import boot from '../lib/boot';
import { Icon, ButtonRound, Logo } from '@/shared/ui';


export default boot((app) => {
  app.component('AppIcon', Icon);
  app.component('ButtonRound', ButtonRound);
  app.component('AppLogo', Logo);
});
