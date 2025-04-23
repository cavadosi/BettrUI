<script setup lang="ts">
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { twMerge } from 'tailwind-merge'
import { computed } from 'vue'
import Icon from '../Icon/Icon.vue'

interface SelectOption {
  id: number
  value: string
}

interface SelectProps {
  modelValue: SelectOption
  items: SelectOption[]
  label?: string
  icon?: string
  selectedIcon?: string
  class?: string
}

const props = defineProps<SelectProps>()
const emit = defineEmits(['update:modelValue'])

const selected = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>

<template>
  <div>
    <Listbox v-model="selected">
      <div class="relative">
        <label v-if="label" class="block text-sm/6 font-medium text-primary-900 dark:text-secondary-50">
          {{ label }}
        </label>
        <div class="relative mt-2">
          <ListboxButton
            :class="twMerge(
              'grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-primary-900 outline-1 -outline-offset-1 outline-secondary-300',
              'focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600 sm:text-sm/6',
              'dark:bg-secondary-950 dark:text-secondary-100 dark:outline-secondary-700 dark:ring-1 dark:ring-black/40',
              props.class,
            )"
          >
            <span class="col-start-1 row-start-1 truncate pr-6">
              {{ selected.value }}
            </span>
            <Icon
              :name="icon || 'ChevronUpDown'"
              aria-hidden="true"
              class="col-start-1 row-start-1 size-5 self-center justify-self-end text-secondary-500 sm:size-4 dark:text-secondary-300"
            />
          </ListboxButton>

          <ListboxOptions
            class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden sm:text-sm dark:bg-secondary-950 dark:ring-gray-700"
          >
            <ListboxOption
              v-for="item in items"
              :key="item.id"
              :value="item"
              v-slot="{ active, selected: isSelected }"
              as="template"
            >
              <li
                class="group relative cursor-default py-2 pr-9 pl-3 text-secondary-900 select-none"
                :class="{
                  'bg-primary-600 text-white dark:bg-primary-500': active,
                  'text-secondary-900 dark:text-secondary-100': !active
                }"
              >
                <span 
                  class="block truncate"
                  :class="{
                    'font-semibold': isSelected,
                    'font-normal': !isSelected
                  }"
                >
                  {{ item.value }}
                </span>
                <span
                  v-if="isSelected"
                  class="absolute inset-y-0 right-0 flex items-center pr-4"
                  :class="{
                    'text-white': active,
                    'text-primary-600 dark:text-secondary-100': !active
                  }"
                >
                  <Icon 
                    :name="selectedIcon || 'Check'" 
                    aria-hidden="true" 
                    class="size-5" 
                  />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </div>
      </div>
    </Listbox>
  </div>
</template>