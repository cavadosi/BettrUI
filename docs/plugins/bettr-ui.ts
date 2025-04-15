import '@bettr-ui/vue/styles';
import { Button } from '@bettr-ui/vue';

export default defineNuxtPlugin((nuxtApp) => {
  // Register the component globally.
  // Make sure the name matches what you use in your templates.
  nuxtApp.vueApp.component('BtrButton', Button);
});
