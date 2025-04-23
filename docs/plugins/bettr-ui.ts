import {
  Accordion,
  Avatar,
  Badge,
  Button,
  Card,
  Checkbox,
  Combobox,
  Container,
  Dropdown,
  Icon,
  Input,
  Pagination,
  RadioGroup,
  Skeleton,
  Tabs,
  Textarea,
  Toggle,
} from '@bettr-ui/vue';

// import '@bettr-ui/vue/styles';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('BtrAccordion', Accordion);
  nuxtApp.vueApp.component('BtrAvatar', Avatar);
  nuxtApp.vueApp.component('BtrBadge', Badge);
  nuxtApp.vueApp.component('BtrButton', Button);
  nuxtApp.vueApp.component('BtrCard', Card);
  nuxtApp.vueApp.component('BtrCheckbox', Checkbox);
  nuxtApp.vueApp.component('BtrCombobox', Combobox);
  nuxtApp.vueApp.component('BtrContainer', Container);
  nuxtApp.vueApp.component('BtrDropdown', Dropdown);
  nuxtApp.vueApp.component('BtrIcon', Icon);
  nuxtApp.vueApp.component('BtrInput', Input);
  nuxtApp.vueApp.component('BtrPagination', Pagination);
  nuxtApp.vueApp.component('BtrRadioGroup', RadioGroup);
  nuxtApp.vueApp.component('BtrSkeleton', Skeleton);
  nuxtApp.vueApp.component('BtrTabs', Tabs);
  nuxtApp.vueApp.component('BtrTextarea', Textarea);
  nuxtApp.vueApp.component('BtrToggle', Toggle);
});
