<script setup lang="ts">
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const TextareaVariants = cva(
  "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 disabled:bg-gray-100 dark:text-gray-100 dark:bg-transparent dark:outline-gray-600 dark:placeholder-gray-500 focus:outline-2 focus:outline-primary-600 focus:-outline-offset-2 sm:text-sm disabled:cursor-not-allowed",
  {
    variants: {
      disabled: {
        true: "disabled:bg-secondary-100 disabled:dark:bg-secondary-950 cursor-not-allowed",
        false: "ocus:outline-2 focus:outline-primary-600 focus:-outline-offset-2",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);

const props = defineProps<{ 
  modelValue: string;
  rows?: number;
  label?: string;
  disabled?: boolean;
  placeholder?: string;
  id: string;
  name: string;
  class?: string;
}>();

defineEmits(["update:modelValue"]);

</script>


<template>
    <div>
      <label v-if="label" :for="id" class="block text-sm/6 font-medium text-secondary-900 dark:text-secondary-100">
        {{ label }}
      </label>
      <div class="mt-2">
        <textarea
          :id="id"
          :name="name"
          :rows="rows ?? 4"
          :disabled="disabled"
          :placeholder="placeholder"
          :value="modelValue"
          @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
          :class="twMerge(TextareaVariants({ disabled }), props.class)"
        ></textarea>
      </div>
    </div>
  </template>
  