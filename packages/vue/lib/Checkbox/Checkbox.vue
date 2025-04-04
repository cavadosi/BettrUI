<script setup lang="ts">
import { ref, watch } from "vue";
// import { twMerge } from "tailwind-merge";

const props = defineProps<{
  label?: string;
  description?: string;
  id: string;
  modelValue: boolean;
}>();

const isChecked = ref(props.modelValue);

watch(() => props.modelValue, (newValue) => {
  isChecked.value = newValue;
});
</script>

<template>
  <div class="flex gap-3">
    <div class="flex h-6 shrink-0 items-center">
      <div class="group grid size-4 grid-cols-1">
        <input
          :id="id"
          :name="id"
          type="checkbox"
          v-model="isChecked"
          aria-describedby="`${id}-description`"
          class="col-start-1 row-start-1 appearance-none rounded-sm border border-secondary-300 bg-white checked:border-primary-600 checked:bg-primary-600 indeterminate:border-primary-600 indeterminate:bg-primary-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:border-secondary-300 disabled:bg-secondary-100 disabled:checked:bg-secondary-100"
        />
        <svg
          fill="none"
          viewBox="0 0 14 14"
          class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
        >
          <path
            d="M3 8L6 11L11 3.5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="opacity-0 group-has-checked:opacity-100"
          />
          <path
            d="M3 7H11"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="opacity-0 group-has-indeterminate:opacity-100"
          />
        </svg>
      </div>
    </div>
    <div class="text-sm/6">
      <label :for="id" class="font-medium text-secondary-900 dark:text-secondary-100">
        {{ label }}
      </label>
      <p :id="`${id}-description`" class="text-secondary-500 dark:text-secondary-400">
        {{ description }}
      </p>
    </div>
  </div>
</template>
