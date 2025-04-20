<script setup lang="ts">
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue';
import { twMerge } from 'tailwind-merge';
import Icon from '../Icon/Icon.vue';

interface SelectOption {
  id: number;
  value: string;
}

const modelValue = defineModel<SelectOption>();

const props = defineProps<{
  items: SelectOption[];
  label?: string;
  icon?: string;
  selectedIcon?: string;
  className?: string;
}>();
</script>

<template>
  <Listbox v-model="modelValue">
    <div>
      <span
        v-if="props.label"
        class="block text-sm/6 font-medium text-primary-900 dark:text-secondary-50"
      >
        {{ props.label }}
      </span>
      <div class="relative mt-2">
        <ListboxButton
          :class="
            twMerge(
              'grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-primary-900 outline-1 -outline-offset-1 outline-secondary-300',
              'focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600 sm:text-sm/6',
              'dark:bg-secondary-950 dark:text-secondary-100 dark:outline-secondary-700 dark:ring-1 dark:ring-black/40',
              props.className
            )
          "
        >
          <span class="col-start-1 row-start-1 truncate pr-6">
            {{ modelValue?.value }}
          </span>
          <Icon
            :name="props.icon || 'ChevronUpDown'"
            aria-hidden="true"
            class="col-start-1 row-start-1 size-5 self-center justify-self-end text-secondary-500 sm:size-4 dark:text-secondary-300"
          />
        </ListboxButton>

        <ListboxOptions
          class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden sm:text-sm dark:bg-secondary-950 dark:ring-gray-700"
        >
          <ListboxOption
            v-for="item in props.items"
            :key="item.id"
            :value="item"
            v-slot=" { active, selected }"
            class="group relative cursor-default py-2 pr-9 pl-3 text-secondary-900 select-none dark:text-secondary-100"
            :class="{
              'bg-primary-600 text-white dark:bg-primary-500 dark:text-white': active,
            }"
          >
            <span
              class="block truncate font-normal"
              :class="{ 'font-semibold': selected }"
            >
              {{ item.value }}
            </span>
            <span
              class="absolute inset-y-0 right-0 flex items-center pr-4 text-primary-600 dark:text-secondary-100"
              v-if="selected"
              :class="{ 'text-white': active }"
            >
              <Icon :name="props.selectedIcon || 'Check'" aria-hidden="true" class="size-5" />
            </span>
          </ListboxOption>
        </ListboxOptions>
      </div>
    </div>
  </Listbox>
</template>
