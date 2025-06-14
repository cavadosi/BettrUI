import * as BettrUI from '@bettr-ui/vue';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('BtrAccordion', BettrUI.Accordion);
  nuxtApp.vueApp.component('BtrAvatar', BettrUI.Avatar);
  nuxtApp.vueApp.component('BtrBadge', BettrUI.Badge);
  nuxtApp.vueApp.component('BtrBreadcrumb', BettrUI.Breadcrumb);
  nuxtApp.vueApp.component('BtrButton', BettrUI.Button);
  nuxtApp.vueApp.component('BtrCard', BettrUI.Card);
  nuxtApp.vueApp.component('BtrCheckbox', BettrUI.Checkbox);
  nuxtApp.vueApp.component('BtrCombobox', BettrUI.Combobox);
  nuxtApp.vueApp.component('BtrContainer', BettrUI.Container);
  nuxtApp.vueApp.component('BtrDivider', BettrUI.Divider);
  nuxtApp.vueApp.component('BtrDropdown', BettrUI.Dropdown);
  nuxtApp.vueApp.component('BtrIcon', BettrUI.Icon);
  nuxtApp.vueApp.component('BtrInput', BettrUI.Input);
  nuxtApp.vueApp.component('BtrModal', BettrUI.Modal);
  nuxtApp.vueApp.component('BtrPagination', BettrUI.Pagination);
  nuxtApp.vueApp.component('BtrRadioGroup', BettrUI.RadioGroup);
  nuxtApp.vueApp.component('BtrSelect', BettrUI.Select);
  nuxtApp.vueApp.component('BtrSkeleton', BettrUI.Skeleton);
  nuxtApp.vueApp.component('BtrTabs', BettrUI.Tabs);
  nuxtApp.vueApp.component('BtrTextarea', BettrUI.Textarea);
  nuxtApp.vueApp.component('BtrToggle', BettrUI.Toggle);
});
