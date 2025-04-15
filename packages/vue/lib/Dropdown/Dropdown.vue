<script setup lang="ts">
import { ref } from 'vue';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import { usePopper } from 'vue-popper';
import { twMerge } from 'tailwind-merge';
import Icon from '../Icon/Icon.vue';
import Button from '../Button/Button.vue';

interface DropdownItem {
  id: number;
  label: string;
  onClick: () => void;
  icon?: string;
}

interface DropdownSection {
  items: DropdownItem[];
}

interface DropdownProps {
  label: string;
  sections: DropdownSection[];
  icon?: string;
  headerTitle?: string;
  headerDescription?: string;
  class?: string;
  placement?: 
    | 'auto' | 'auto-start' | 'auto-end'
    | 'top' | 'top-start' | 'top-end'
    | 'bottom' | 'bottom-start' | 'bottom-end'
    | 'right' | 'right-start' | 'right-end'
    | 'left' | 'left-start' | 'left-end';
  offset?: number;
  buttonVariant?: 'solid' | 'link' | 'outline' | 'soft' | 'ghost' | 'secondary';
  buttonSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  buttonRounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const props = withDefaults(defineProps<DropdownProps>(), {
  icon: 'ChevronDown',
  buttonVariant: 'secondary',
  buttonSize: 'sm',
  buttonRounded: 'md',
  placement: 'bottom-end',
  offset: 0
});

const referenceElement = ref<HTMLElement | null>(null);
const popperElement = ref<HTMLElement | null>(null);

const { styles, attributes } = usePopper(
  referenceElement,
  popperElement,
  {
    placement: props.placement,
    modifiers: [
      {
        name: 'preventOverflow',
        options: { boundary: 'clippingParents', padding: 8 }
      },
      {
        name: 'flip',
        options: { fallbackPlacements: ['top-end', 'bottom-end'] }
      },
      { 
        name: 'offset', 
        options: { offset: [0, props.offset] } 
      }
    ]
  }
);
</script>

<template>
  <Menu as="div" :class="twMerge('relative inline-block text-left', props.class)">
    <div ref="referenceElement">
      <MenuButton>
        <Button
          :variant="buttonVariant"
          :size="buttonSize"
          :rounded="buttonRounded"
          class="w-full justify-center gap-x-1.5"
        >
          {{ label }}
          <Icon
            :name="icon"
            aria-hidden="true"
            class="-mr-1 size-5 text-secondary-400 dark:text-secondary-50/40"
          />
        </Button>
      </MenuButton>
    </div>

    <MenuItems
      ref="popperElement"
      :style="styles.popper"
      v-bind="attributes.popper"
      class="z-10 mt-2 w-56 origin-top-right divide-y divide-secondary-100 dark:divide-secondary-700 rounded-md bg-white dark:bg-secondary-950 ring-1 shadow-lg ring-secondary-950/5 dark:ring-secondary-50/20 transition focus:outline-hidden data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[enter]:ease-out data-[leave]:duration-75 data-[leave]:ease-in"
    >
      <div v-if="headerTitle" class="px-4 py-3">
        <p class="text-sm font-medium text-secondary-900 dark:text-secondary-100">
          {{ headerTitle }}
        </p>
        <p v-if="headerDescription" class="truncate text-sm text-secondary-700 dark:text-secondary-300">
          {{ headerDescription }}
        </p>
      </div>

      <div v-for="(section, sectionIndex) in sections" :key="sectionIndex" class="py-1">
        <MenuItem v-for="item in section.items" :key="item.id" v-slot="{ active }">
          <button
            @click="item.onClick"
            :class="twMerge(
              'group flex items-center w-full px-4 py-2 text-left text-sm',
              active
                ? 'bg-secondary-100 text-secondary-900 dark:bg-secondary-700 dark:text-secondary-100'
                : 'text-secondary-700 dark:text-secondary-300'
            )"
          >
            <Icon
              v-if="item.icon"
              :name="item.icon"
              aria-hidden="true"
              class="mr-3 size-5 text-secondary-400 group-data-[focus]:text-secondary-500 dark:text-secondary-300 dark:group-data-[focus]:text-secondary-300"
            />
            {{ item.label }}
          </button>
        </MenuItem>
      </div>
    </MenuItems>
  </Menu>
</template>