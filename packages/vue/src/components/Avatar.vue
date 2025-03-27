<script setup lang="ts">
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const AvatarVariants = cva("inline-block object-cover", {
  variants: {
    size: {
      xs: "w-6 h-6",
      sm: "w-8 h-8",
      md: "w-10 h-10",
      lg: "w-12 h-12",
      xl: "w-14 h-14",
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
    size: "md",
    rounded: "md",
  },
});

const props = defineProps<{
  src: string;
  alt: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  class?: string;
}>();
</script>

<template>
  <img
    :src="src"
    :alt="alt"
    :class="twMerge(AvatarVariants({ size, rounded }), props.class)"
    v-bind="$attrs"
  />
</template>