<script setup lang="ts">
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const cardVariants = cva(
  "divide-y divide-secondary-100 overflow-hidden rounded-lg bg-background-light dark:bg-background-dark dark:text-white dark:divide-secondary-950 shadow-sm border-secondary-100 dark:border-secondary-900",
  {
    variants: {
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
      },
    },
    defaultVariants: {
      rounded: "md",
    },
  },
);

const props = defineProps<{
  rounded?: "none" | "sm" | "md" | "lg" | "xl";
  class?: string;
}>();
</script>

<template>
  <div :class="twMerge(cardVariants({ rounded: props.rounded }), props.class)">
    <div v-if="$slots.header" class="px-4 py-5 sm:px-6">
      <slot name="header" />
    </div>

    <div v-if="$slots.content" class="px-4 py-5 sm:p-6">
      <slot name="content" />
    </div>

    <div v-if="$slots.footer" class="px-4 py-4 sm:p-6">
      <slot name="footer" />
    </div>
  </div>
</template>
