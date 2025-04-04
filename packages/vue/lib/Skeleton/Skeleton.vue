<script setup lang="ts">
import { computed } from "vue";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const SkeletonVariants = cva("animate-pulse bg-secondary-100 dark:bg-secondary-800", {
  variants: {
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
  },
});

const props = defineProps<{
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
}>();

const computedClasses = computed(() => twMerge(SkeletonVariants({ rounded: props.rounded }), props.className));
</script>

<template>
  <div :class="computedClasses" />
</template>
