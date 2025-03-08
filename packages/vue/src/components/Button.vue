<!-- src/components/Button.vue -->
<script setup lang="ts">
defineProps<{ label: string }>();
</script>

<template>
  <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
    {{ label }}
  </button>
</template>
