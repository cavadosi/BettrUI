<script setup lang="ts">
import { cva } from "class-variance-authority";
import { twMerge } from 'tailwind-merge'

const CardVariants = cva(
  "divide-y divide-secondary-200 overflow-hidden rounded-lg bg-secondary-50 shadow-sm",
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
  }
);

const props = defineProps<{
  rounded?: "none" | "sm" | "md" | "lg" | "xl";
  class?: string;
}>();
</script>
<template>
    <div :class="twMerge(CardVariants({ rounded: props.rounded }), props.class)">
      <slot />
    </div>
  </template>