<script setup lang="ts">
import { ref } from 'vue';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import { Popper } from 'vue-popperjs';
import 'vue-popperjs/dist/vue-popper.css';

import Icon from './Icon.vue';
import Button from './Button.vue';

defineProps<{
  label: string;
  sections: { items: { id: number; label: string; icon?: string; onClick: () => void }[] }[];
  icon?: string;
  headerTitle?: string;
  headerDescription?: string;
  class?: string;
  placement?: string;
  offset?: number;
  buttonVariant?: string;
  buttonSize?: string;
  buttonRounded?: string;
}>();

const reference = ref(null);
const dropdown = ref(null);
</script>

<template>
  <div class="relative inline-block text-left" :class="class">
    <Popper
      :reference-element="reference"
      :placement="placement || 'bottom-end'"
      :offset="offset || 0"
      :append-to-body="true"
    >
      <template #reference>
        <div ref="reference">
          <MenuButton>
            <Button :variant="buttonVariant" :size="buttonSize" :rounded="buttonRounded" class="w-full justify-center gap-x-1.5">
              {{ label }}
              <Icon v-if="icon" :name="icon" class="-mr-1 size-5 text-secondary-400 dark:text-secondary-50/40" />
            </Button>
          </MenuButton>
        </div>
      </template>

      <template #default>
        <MenuItems
          class="z-10 mt-2 w-56 origin-top-right divide-y divide-secondary-100 dark:divide-secondary-700 rounded-md bg-white dark:bg-secondary-950 ring-1 shadow-lg ring-secondary-950/5 dark:ring-secondary-50/20 focus:outline-none"
        >
          <div v-if="headerTitle" class="px-4 py-3">
            <p class="text-sm font-medium text-secondary-900 dark:text-secondary-100">{{ headerTitle }}</p>
            <p v-if="headerDescription" class="truncate text-sm text-secondary-700 dark:text-secondary-300">
              {{ headerDescription }}
            </p>
          </div>

          <div v-for="(section, index) in sections" :key="index" class="py-1">
            <MenuItem v-for="item in section.items" :key="item.id" v-slot="{ active }">
              <button
                @click="item.onClick"
                class="group flex items-center w-full px-4 py-2 text-left text-sm"
                :class="[
                  active
                    ? 'bg-secondary-100 text-secondary-900 dark:bg-secondary-700 dark:text-secondary-100'
                    : 'text-secondary-700 dark:text-secondary-300'
                ]"
              >
                <Icon
                  v-if="item.icon"
                  :name="item.icon"
                  class="mr-3 size-5 text-secondary-400 group-focus:text-secondary-500 dark:text-secondary-300"
                />
                {{ item.label }}
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </template>
    </Popper>
  </div>
</template>
