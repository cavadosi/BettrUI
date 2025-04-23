import AccordionDemo from '../components/demo/AccordionDemo.vue';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('DemoAccordion', AccordionDemo);
});
