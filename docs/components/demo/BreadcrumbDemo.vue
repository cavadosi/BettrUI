<template>
  <BtrBreadcrumb v-if="custom" icon="ArrowRight" :pages="pages" />
  <BtrBreadcrumb v-else :pages="pages" />
</template>

<script setup>
defineProps({
  custom: {
    type: Boolean,
    default: false,
  },
});
const pages = [
  { icon: 'Home', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Project Nero', href: '#', current: true },
];
</script>
