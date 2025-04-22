<script setup lang="ts">
import { computed } from "vue";
import { twMerge } from "tailwind-merge";
import Icon from "../Icon/Icon.vue";

const props = defineProps<{
  modelValue: string;
  id?: string;
  type?: string;
  label: string;
  description?: string;
  error?: string;
  loading?: boolean;
  leadingIcon?: string;
  trailingIcon?: string;
  placeholder?: string;
  class?: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const inputClass = computed(() =>
  twMerge(
    "col-start-1 row-start-1 block w-full rounded-md bg-white px-3 py-1.5 text-base text-secondary-900 outline-1 -outline-offset-1 dark:bg-transparent dark:text-secondary-200 dark:outline-secondary-700",
    props.error
      ? "outline-red-300 placeholder:text-red-300 focus:outline-red-600 dark:outline-red-600 dark:placeholder:text-red-400"
      : "outline-secondary-300 placeholder:text-secondary-400 focus:outline-primary-600 dark:outline-secondary-500 dark:placeholder:text-secondary-500 dark:focus:outline-primary-400",
    "focus:outline-2 focus:-outline-offset-2 disabled:cursor-not-allowed disabled:bg-secondary-50 disabled:text-secondary-500 disabled:outline-secondary-200 dark:disabled:bg-secondary-950 dark:disabled:text-secondary-400 sm:text-sm",
    props.leadingIcon ? "pl-10" : "",
    props.class
  )
);
</script>

<template>
  <div>
    <label
      v-if="label"
      :for="id"
      class="block text-sm font-medium text-secondary-900 dark:text-secondary-100"
    >
      {{ label }}
    </label>

    <div class="mt-2 relative grid grid-cols-1">
      <div class="flex items-center relative w-full">
        <input
          :id="id"
          :name="id"
          :type="type || 'text'"
          :aria-describedby="description ? `${id}-description` : undefined"
          :aria-invalid="error ? 'true' : 'false'"
          :disabled="loading"
          :value="modelValue"
          :class="inputClass"
          @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        />

        <Icon
          v-if="leadingIcon"
          :name="leadingIcon"
          class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-secondary-400 dark:text-secondary-500"
          aria-hidden="true"
        />

        <Icon
          v-if="trailingIcon && !loading && !error"
          :name="trailingIcon"
          class="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-secondary-400 dark:text-secondary-500"
          aria-hidden="true"
        />

        <Icon
          v-if="loading"
          name="ArrowPath"
          class="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-secondary-400 dark:text-secondary-500 animate-spin"
          aria-hidden="true"
        />

        <Icon
          v-if="error"
          name="ExclamationCircle"
          class="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-red-500 dark:text-red-400"
          aria-hidden="true"
        />
      </div>
    </div>

    <p
      v-if="description"
      :id="`${id}-description`"
      class="mt-2 text-sm text-secondary-500 dark:text-secondary-400"
    >
      {{ description }}
    </p>

    <p
      v-if="error"
      :id="`${id}-error`"
      class="mt-2 text-sm text-red-600 dark:text-red-400"
    >
      {{ error }}
    </p>
  </div>
</template>
