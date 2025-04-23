<script setup lang="ts">
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/vue";
import { ref, computed, watch } from "vue";
import Icon from "../Icon/Icon.vue"; // Asegurate de que esta ruta sea correcta

interface Item {
  id: number;
  label: string;
}

const props = defineProps<{
  items: Item[];
  label: string;
  icon?: string;
  selectedIcon?: string;
  selectedItem: Item | null;
}>();

const emit = defineEmits<{
  (e: "update:selectedItem", item: Item | null): void;
}>();

const icon = props.icon ?? "ChevronUpDown";
const selectedIcon = props.selectedIcon ?? "Check";

const query = ref("");
const selected = ref<Item | null>(props.selectedItem);

watch(
  () => props.selectedItem,
  (val) => {
    selected.value = val;
  }
);

const filteredItems = computed(() => {
  if (query.value === "") return props.items;
  return props.items.filter((item) =>
    item.label.toLowerCase().includes(query.value.toLowerCase())
  );
});

function handleChange(item: Item | null) {
  query.value = "";
  selected.value = item;
  emit("update:selectedItem", item);
}
</script>

<template>
  <Combobox as="div" :model-value="selected" @update:modelValue="handleChange">
    <label class="block text-sm font-medium text-secondary-900 dark:text-secondary-50">
      {{ props.label }}
    </label>
    <div class="relative mt-2">
      <ComboboxInput
        class="block w-full rounded-md bg-white py-1.5 pr-12 pl-3 text-base text-secondary-900 outline-1 -outline-offset-1 outline-secondary-300 placeholder:text-secondary-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary-500 dark:bg-secondary-950 dark:text-secondary-100 dark:outline-secondary-800 dark:placeholder:text-secondary-500 sm:text-sm"
        :display-value="(item) => (item as Item)?.label || ''"
        @change="query = $event.target.value"
        @blur="query = ''"
      />
      <ComboboxButton class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-hidden">
        <Icon
          :name="icon"
          class="w-5 h-5 text-secondary-400 dark:text-secondary-500"
          aria-hidden="true"
        />
      </ComboboxButton>

      <ComboboxOptions
        v-if="filteredItems.length > 0"
        class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 shadow-lg ring-black/5 focus:outline-hidden sm:text-sm dark:bg-secondary-950 dark:ring-secondary-800"
      >
        <ComboboxOption
          v-for="item in filteredItems"
          :key="item.id"
          :value="item"
          class="group relative cursor-default py-2 pr-9 pl-3 text-secondary-900 select-none hover:bg-primary-500 hover:text-white focus:bg-primary-600 focus:text-white dark:text-secondary-100 dark:hover:bg-primary-500 dark:hover:text-white dark:focus:bg-primary-600 dark:focus:text-white"
        >
          <span class="block truncate group-focus:font-semibold">
            {{ item.label }}
          </span>
          <span
            class="absolute inset-y-0 right-0 hidden items-center pr-4 text-primary-500 group-data-focus:text-white group-data-selected:flex dark:text-primary-400 dark:group-data-focus:text-white dark:group-data-selected:flex"
          >
            <Icon
              :name="selectedIcon"
              class="w-5 h-5"
              aria-hidden="true"
            />
          </span>
        </ComboboxOption>
      </ComboboxOptions>
    </div>
  </Combobox>
</template>
