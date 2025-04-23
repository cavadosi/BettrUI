import AccordionDemo from '~/components/AccordionDemo.vue';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('DemoAccordion', AccordionDemo);
});
