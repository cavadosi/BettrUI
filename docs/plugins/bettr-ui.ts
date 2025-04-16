import { Badge, Button } from '@bettr-ui/vue';

export default defineNuxtPlugin((nuxtApp) => {
  // Register the component globally.
  nuxtApp.vueApp.component('BtrButton', Button);
  nuxtApp.vueApp.component('BtrBadge', Badge);
});
