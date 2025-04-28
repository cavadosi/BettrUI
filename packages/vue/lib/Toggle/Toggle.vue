<script setup lang="ts">
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import Icon from "../Icon/Icon.vue";
import { useAttrs} from "vue";

const props = defineProps<{
  modelValue: boolean;
  disabled?: boolean;
  label?: string;
  description?: string;
  activeIcon?: string;
  inactiveIcon?: string;
  class?: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const attrs = useAttrs();

const baseClasses = cva(
  "group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-secondary-200 transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:outline-hidden data-[checked=true]:bg-primary-600 dark:bg-secondary-400 dark:data-[checked=true]:bg-primary-500 dark:focus:ring-primary-400 dark:focus:ring-offset-secondary-900",
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

const onToggle = () => {
  if (!props.disabled) {
    emit("update:modelValue", !props.modelValue);
  }
};

</script>

<template>
  <div class="flex items-start" v-bind="attrs">
    <button
      type="button"
      role="switch"
      :aria-checked="modelValue"
      :class="twMerge(baseClasses({ disabled: props.disabled }), props.class)"
      :disabled="disabled"
      :data-checked="modelValue"
      @click="onToggle"
    >
      <span class="sr-only">{{ label }}</span>
      <span
        aria-hidden="true"
        class="pointer-events-none inline-block size-5 transform rounded-full bg-background-light ring-0 shadow-sm transition duration-200 ease-in-out"
        :class="{ 'translate-x-5': modelValue, 'dark:bg-background-dark': true }"
      >
        <span
          aria-hidden="true"
          class="absolute inset-0 flex size-full items-center justify-center transition-opacity duration-200 ease-in"
          :class="{
            'opacity-0 duration-100 ease-out': modelValue,
            'opacity-100': !modelValue,
          }"
        >
          <Icon
            v-if="inactiveIcon"
            :name="inactiveIcon"
            variant="solid"
            class="size-3 text-secondary-400 dark:text-secondary-300"
          />
        </span>
        <span
          aria-hidden="true"
          class="absolute inset-0 flex size-full items-center justify-center opacity-0 transition-opacity duration-100 ease-out"
          :class="{
            'opacity-100 duration-200 ease-in': modelValue,
            'opacity-0': !modelValue,
          }"
        >
          <Icon
            v-if="activeIcon"
            :name="activeIcon"
            variant="solid"
            class="size-3 text-primary-600 dark:text-primary-500"
          />
        </span>
      </span>
    </button>

    <label v-if="label || description" class="flex flex-col ml-3 text-sm">
      <span
        v-if="label"
        class="font-medium text-secondary-900 dark:text-primary-100"
      >
        {{ label }}
      </span>
      <span
        v-if="description"
        class="text-secondary-500 dark:text-secondary-300"
      >
        {{ description }}
      </span>
    </label>
  </div>
</template>
