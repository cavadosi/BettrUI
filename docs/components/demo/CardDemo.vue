<template>
  <BtrCard v-if="custom" :rounded="rounded" class="w-96">
    <template #header>
      Card Header
    </template>
    <template #content>
      <BtrContainer class="w-full h-20 border border-dashed" />
    </template>
    <template #footer>
      <BtrButton variant="solid" class="block w-full">
        Click Me
      </BtrButton>
    </template>
  </BtrCard>
  <BtrCard v-else :rounded="rounded" class="w-96">
    <template #content>
      <BtrContainer class="w-full h-20 border border-dashed" />
    </template>
  </BtrCard>
</template>

<script setup lang="ts">
defineProps({
  custom: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: String,
    default: 'md',
  },
});
</script>
