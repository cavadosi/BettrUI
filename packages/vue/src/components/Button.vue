<script setup lang="ts">
import { defineProps } from "vue";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const ButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        solid: "bg-indigo-600 text-white shadow hover:bg-indigo-500",
        link: "text-indigo-600 underline-offset-4 hover:underline",
        outline: "border border-indigo-600 text-indigo-600 hover:bg-indigo-100",
        soft: "bg-indigo-100 text-indigo-600 hover:bg-indigo-200",
        ghost: "text-indigo-600 hover:bg-indigo-100",
      },
      size: {
        xs: "px-2 py-1 text-xs",
        sm: "px-2 py-1 text-sm",
        md: "px-2.5 py-1.5 text-sm",
        lg: "px-3 py-2 text-sm",
        xl: "px-3.5 py-2.5 text-sm",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
      rounded: "md",
    },
  }
);

const props = defineProps<{
  variant?: "solid" | "link" | "outline" | "soft" | "ghost";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  class?: string;
}>();
</script>

<template>
  <button :class="twMerge(ButtonVariants({ variant, size, rounded }), props.class)">
    <slot />
  </button>
</template>
