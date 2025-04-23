<script setup lang="ts">
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const ButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        solid:
          "bg-primary-600 text-white shadow hover:bg-primary-500 dark:bg-primary-500 dark:hover:bg-primary-400",
        link: "text-primary-600 underline-offset-4 hover:underline dark:text-primary-400",
        outline:
          "border border-primary-600 text-primary-600 hover:bg-primary-100 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-300/20",
        soft: "bg-primary-50 text-primary-400 hover:bg-primary-100 dark:bg-primary-950 dark:hover:bg-primary-900",
        ghost:
          "text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-950",
        secondary:
          "bg-white ring-secondary-300 ring-inset hover:bg-secondary-50 text-secondary-900 ring-1 text-xs font-semibold shadow-xs dark:ring-0 dark:text-white dark:bg-white/10  dark:hover:bg-white/20",
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
  },
);


const props = defineProps<{
  variant?: "solid" | "link" | "outline" | "soft" | "ghost" | "secondary";
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
