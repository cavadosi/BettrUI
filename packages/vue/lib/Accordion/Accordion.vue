<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { twMerge } from "tailwind-merge";
import Icon from "../Icon/Icon.vue";

interface AccordionItem {
  id: number;
  label: string;
  description: string;
}

const props = defineProps<{
  items: AccordionItem[];
  openIcon?: string;
  closedIcon?: string;
  class?: string;
}>();

const openIcon = props.openIcon ?? "MinusSmall";
const closedIcon = props.closedIcon ?? "PlusSmall";

const iconClass = "w-6 h-6";
</script>

<template>
  <div :class="twMerge('mx-auto max-w-4xl', props.class)">
    <dl class="divide-y divide-secondary-900/10 dark:divide-secondary-50/10">
      <Disclosure
        v-for="item in props.items"
        :key="item.id"
        v-slot="{ open }"
        as="div"
        class="py-6 first:pt-0 last:pb-0"
      >
        <dt>
          <DisclosureButton
            class="group flex w-full items-start justify-between text-left text-secondary-900 dark:text-secondary-50"
          >
            <span class="text-base/7 font-semibold">{{ item.label }}</span>
            <span class="ml-6 flex h-7 items-center">
              <Icon
                v-if="!open"
                :name="closedIcon"
                aria-hidden="true"
                :class="iconClass"
              />
              <Icon
                v-else
                :name="openIcon"
                aria-hidden="true"
                :class="iconClass"
              />
            </span>
          </DisclosureButton>
        </dt>
        <DisclosurePanel as="dd" class="mt-2 pr-12">
          <p class="text-base/7 text-secondary-600 dark:text-secondary-300">
            {{ item.description }}
          </p>
        </DisclosurePanel>
      </Disclosure>
    </dl>
  </div>
</template>
