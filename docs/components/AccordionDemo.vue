<template>
  <BtrAccordion v-if="icons" :items="items" open-icon="ChevronUp" closed-icon="ChevronDown" />
  <BtrAccordion v-else :items="items" />
</template>

<script setup>
defineProps({
  icons: {
    type: Boolean,
    default: false,
  },
});

const items = [
  {
    id: 1,
    label: 'What is the best thing about Switzerland?',
    description:
      'I dont know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 2,
    label: 'Why are mountains so great?',
    description:
      'Mountains are majestic and inspire a sense of adventure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
];
</script>
