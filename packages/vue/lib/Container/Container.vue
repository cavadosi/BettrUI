<script setup lang="ts">
import { twMerge } from "tailwind-merge";

const props = defineProps<{
  class?: string;
  children?: string;
}>();
</script>

<template>
  <div :class="twMerge('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', props.class)">
    <slot>
        {{ props.children }}
    </slot>
  </div>
</template>
    