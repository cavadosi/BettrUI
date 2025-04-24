import CardDemo from '~/components/demo/CardDemo.vue';
import TabsDemo from '~/components/demo/TabsDemo.vue';
import AccordionDemo from '../components/demo/AccordionDemo.vue';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('DemoAccordion', AccordionDemo);
  nuxtApp.vueApp.component('DemoCard', CardDemo);
  nuxtApp.vueApp.component('DemoTabs', TabsDemo);
});
