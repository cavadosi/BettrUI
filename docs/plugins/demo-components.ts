import BreadcrumbDemo from '~/components/demo/BreadcrumbDemo.vue';
import CardDemo from '~/components/demo/CardDemo.vue';
import ComboboxDemo from '~/components/demo/ComboboxDemo.vue';
import PaginationDemo from '~/components/demo/PaginationDemo.vue';
import RadioGroupDemo from '~/components/demo/RadioGroupDemo.vue';
import SelectDemo from '~/components/demo/SelectDemo.vue';
import TabsDemo from '~/components/demo/TabsDemo.vue';
import ThemeGeneratorModal from '~/components/ThemeGeneratorModal.vue';
import AccordionDemo from '../components/demo/AccordionDemo.vue';
import DropdownDemo from '../components/demo/DropdownDemo.vue';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('DemoAccordion', AccordionDemo);
  nuxtApp.vueApp.component('DemoBreadcrumb', BreadcrumbDemo);
  nuxtApp.vueApp.component('DemoCard', CardDemo);
  nuxtApp.vueApp.component('DemoCombobox', ComboboxDemo);
  nuxtApp.vueApp.component('DemoDropdown', DropdownDemo);
  nuxtApp.vueApp.component('DemoPagination', PaginationDemo);
  nuxtApp.vueApp.component('DemoRadioGroup', RadioGroupDemo);
  nuxtApp.vueApp.component('DemoSelect', SelectDemo);
  nuxtApp.vueApp.component('DemoTabs', TabsDemo);
  nuxtApp.vueApp.component('ThemeGenerator', ThemeGeneratorModal);
});
