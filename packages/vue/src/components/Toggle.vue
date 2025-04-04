<script setup lang="ts">
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import Icon from "./Icon.vue";

const ToggleVariants = cva(
  "group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-secondary-200 transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:outline-none data-[checked]:bg-primary-600",
  {
    variants: {
      disabled: {
        true: "opacity-50 cursor-not-allowed",
        false: "",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
);

const props = defineProps<{
  modelValue: boolean;  
  disabled?: boolean;
  label?: string;
  description?: string;
  activeIcon?: string;
  inactiveIcon?: string;
  class?: string;
}>();


</script>

<template>
  <div class="flex items-start">
    <button
      type="button"
      :class="twMerge(ToggleVariants({ disabled: props.disabled }), props.class)"
      :aria-checked="modelValue"
      role="switch"
      :disabled="disabled"
      @click="!modelValue"
    >
      <span class="sr-only">{{ label }}</span>
      <span
        aria-hidden="true"
        class="pointer-events-none inline-block size-5 transform rounded-full bg-white ring-0 shadow-sm transition duration-200 ease-in-out"
        :class="{ 'translate-x-5': modelValue }"
      >
        <span
          v-if="inactiveIcon"
          class="absolute inset-0 flex size-full items-center justify-center transition-opacity duration-200 ease-in"
          :class="{ 'opacity-0 duration-100 ease-out': modelValue }"
        >
          <Icon :name="inactiveIcon" variant="solid" class="size-3 text-secondary-400 dark:text-secondary-300" />
        </span>
        <span
          v-if="activeIcon"
          class="absolute inset-0 flex size-full items-center justify-center opacity-0 transition-opacity duration-100 ease-out"
          :class="{ 'opacity-100 duration-200 ease-in': modelValue }"
        >
          <Icon :name="activeIcon" variant="solid" class="size-3 text-primary-600 dark:text-primary-500" />
        </span>
      </span>
    </button>

    <div v-if="label || description" class="flex flex-col ml-3 text-sm">
      <span v-if="label" class="font-medium text-secondary-900 dark:text-primary-100">
        {{ label }}
      </span>
      <span v-if="description" class="text-secondary-500 dark:text-secondary-400">
        {{ description }}
      </span>
    </div>
  </div>
</template>
