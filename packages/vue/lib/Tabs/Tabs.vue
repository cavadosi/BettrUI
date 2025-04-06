<template>
  <TabGroup>
    <div class="space-y-4">
      <TabList
        class="flex p-1.5 rounded-md bg-secondary-100 dark:bg-secondary-950"
      >
        <Tab
          v-for="item in items"
          :key="item.label"
          as="template"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-full py-2 text-sm leading-5 font-medium rounded-md transition-colors duration-100 cursor-pointer flex items-center justify-center gap-2',
              selected
                ? 'bg-primary-500 text-white dark:bg-primary-600'
                : 'text-secondary-700 dark:text-secondary-300',
            ]"
          >
            <Icon
              v-if="item.icon"
              :is="item.icon"
              :name="item.icon"
              :variant="iconVariant ?? 'outline'"
              class="w-4 h-4"
            />
            {{ item.label }}
          </button>
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel v-for="item in items" :key="item.label">
          <slot :name="item.label" />
        </TabPanel>
      </TabPanels>
    </div>
  </TabGroup>
</template>

<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { defineProps } from "vue";
import Icon from "../Icon/Icon.vue";

interface TabItem {
  label: string;
  icon?: string;
}

type IconVariant = "outline" | "solid";

defineProps<{
  items: TabItem[];
  iconVariant?: IconVariant;
}>();
</script>
