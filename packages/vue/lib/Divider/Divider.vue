<script setup lang="ts">
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";


const DividerVariants = cva(
"border-secondary-200 dark:border-secondary-500 w-full",
{
    variants: {
    size: {
        xs: "border-[0.5px]",
        sm: "border-[1px]",
        md: "border-[1.5px]",
        lg: "border-[2px]",
        xl: "border-[3px]",
    },
    },
    defaultVariants: {
    size: "xs",
    },
},
);

defineProps<{
size?: "xs" | "sm" | "md" | "lg" | "xl";
class?: string;
}>();
</script>


<template>
    <div class="flex w-full flex-row items-center text-center">
      <div aria-hidden="true" class="flex items-center w-full">
        <div :class="twMerge('border-t', DividerVariants({ size }))" />
      </div>
  
      <template v-if="$slots.default">
        <div class="relative flex justify-center">
          <span class="px-2 flex whitespace-nowrap text-sm text-secondary-300 dark:text-secondary-400">
            <slot />
          </span>
        </div>
        <div aria-hidden="true" class="w-full inset-0 flex items-center">
          <div :class="twMerge('border-t', DividerVariants({ size }))" />
        </div>
      </template>
    </div>
  </template>
  