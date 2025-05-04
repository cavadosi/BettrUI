<template>
  <BtrRadioGroup
    v-model="selected"
    label="Plan"
    description="Choose the plan that fits your team."
    :items="items"
  />
</template>

<script setup>
const selected = ref(null);

const items = [
  {
    id: 'small',
    label: 'Small',
    description: '4 GB RAM / 2 CPUS / 80 GB SSD Storage',
    value: 'small',
  },
  {
    id: 'medium',
    label: 'Medium',
    description: '8 GB RAM / 4 CPUS / 160 GB SSD Storage',
    value: 'medium',
  },
  {
    id: 'large',
    label: 'Large',
    description: '16 GB RAM / 8 CPUS / 320 GB SSD Storage',
    value: 'large',
  },
];
</script>
