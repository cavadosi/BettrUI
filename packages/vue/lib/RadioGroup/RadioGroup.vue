<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";

const props = defineProps<{
  items: {
    id: string;
    label: string;
    description: string;
    value: string;
  }[];
  label?: string;
  description?: string;
  modelValue: string;
  class?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const handleChange = (value: string) => {
  emit("update:modelValue", value);
};

const baseInput = cva(
  "relative size-4 appearance-none rounded-full border border-secondary-300 bg-background-light before:absolute before:inset-1 before:rounded-full before:bg-background-light not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-secondary-300 disabled:bg-secondary-100 disabled:before:bg-secondary-400 dark:border-secondary-600 dark:bg-secondary-700 dark:checked:border-indigo-700 dark:checked:bg-indigo-700 dark:focus-visible:outline-indigo-400"
);
</script>

<template>
  <fieldset
    :aria-label="label"
    :class="twMerge(props.class, 'dark:text-secondary-100 dark:border-secondary-600')"
  >
    <legend
      v-if="label"
      class="text-sm/6 font-semibold text-secondary-900 dark:text-secondary-50"
    >
      {{ label }}
    </legend>
    <p v-if="description" class="mt-1 text-sm/6 text-secondary-600 dark:text-secondary-200">
      {{ description }}
    </p>
    <div :class="twMerge('space-y-5', (label || description) ? 'mt-6' : '')">
      <div
        v-for="item in items"
        :key="item.id"
        class="relative flex items-start"
      >
        <div class="flex h-6 items-center">
          <input
            :id="item.id"
            :name="label"
            type="radio"
            :value="item.value"
            :checked="item.value === modelValue"
            @change="handleChange(item.value)"
            :aria-describedby="`${item.id}-description`"
            :class="twMerge(baseInput())"
          />
        </div>
        <div class="ml-3 text-sm/6">
          <label
            :for="item.id"
            class="font-medium text-secondary-900 dark:text-secondary-100"
          >
            {{ item.label }}
          </label>
          <p
            :id="`${item.id}-description`"
            class="text-secondary-500 dark:text-secondary-300"
          >
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </fieldset>
</template>
