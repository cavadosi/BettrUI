import { Avatar, Badge, Button, Checkbox, Icon, Skeleton, Textarea, Toggle } from '@bettr-ui/vue';

export default defineNuxtPlugin((nuxtApp) => {
  // Register the component globally.
  nuxtApp.vueApp.component('BtrAvatar', Avatar);
  nuxtApp.vueApp.component('BtrBadge', Badge);
  nuxtApp.vueApp.component('BtrButton', Button);
  nuxtApp.vueApp.component('BtrCheckbox', Checkbox);
  nuxtApp.vueApp.component('BtrIcon', Icon);
  nuxtApp.vueApp.component('BtrSkeleton', Skeleton);
  nuxtApp.vueApp.component('BtrTextarea', Textarea);
  nuxtApp.vueApp.component('BtrToggle', Toggle);
});
