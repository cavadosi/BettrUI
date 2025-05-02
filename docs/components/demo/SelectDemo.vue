<template>
  <BtrSelect
    v-if="custom"
    :model-value="selected"
    label="Select a user"
    :items="people"
    icon="ChevronDown"
    selected-icon="CheckBadge"
  />
  <BtrSelect v-else :model-value="selected" label="Select a user" :items="people" />
</template>

<script setup lang="ts">
defineProps({
  custom: {
    type: Boolean,
    default: false,
  },
});
const people = [
  { id: 1, value: 'Wade Cooper' },
  { id: 2, value: 'Arlene Mccoy' },
  { id: 3, value: 'Devon Webb' },
  { id: 4, value: 'Tom Cook' },
  { id: 5, value: 'Tanya Fox' },
  { id: 6, value: 'Hellen Schmidt' },
  { id: 7, value: 'Caroline Schultz' },
  { id: 8, value: 'Mason Heaney' },
  { id: 9, value: 'Claudie Smitham' },
  { id: 10, value: 'Emil Schaefer' },
];

const selected = ref(people[0]);
</script>
