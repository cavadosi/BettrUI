<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ref, watch, nextTick, onMounted } from "vue";
import { createPopper, Instance } from "@popperjs/core";
import Button from "../Button/Button.vue";
import Icon from "../Icon/Icon.vue";

interface DropdownItem {
  id: number;
  label: string;
  onClick: () => void;
  icon?: string;
}

interface DropdownSection {
  items: DropdownItem[];
}

type Placement =
  | "auto"
  | "auto-start"
  | "auto-end"
  | "top"
  | "top-start"
  | "top-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "right"
  | "right-start"
  | "right-end"
  | "left"
  | "left-start"
  | "left-end";

interface Props {
  label: string;
  sections: DropdownSection[];
  icon?: string;
  headerTitle?: string;
  headerDescription?: string;
  placement?: Placement;
  offset?: number;
  buttonVariant?: "solid" | "link" | "outline" | "soft" | "ghost" | "secondary";
  buttonSize?: "xs" | "sm" | "md" | "lg" | "xl";
  buttonRounded?: "none" | "sm" | "md" | "lg" | "xl" | "full";
}

const props = withDefaults(defineProps<Props>(), {
  icon: "ChevronDown",
  placement: "bottom-end",
  offset: 0,
  buttonVariant: "secondary",
  buttonSize: "sm",
  buttonRounded: "md",
});

const referenceElement = ref<HTMLElement | null>(null);
const popperElement = ref<HTMLElement | null>(null);
const popperInstance = ref<Instance | null>(null);
const popperAttributes = ref({});
const popperStyles = ref({});

const createOrUpdatePopper = () => {
  if (popperInstance.value) {
    popperInstance.value.destroy();
    popperInstance.value = null;
  }

  if (referenceElement.value && popperElement.value) {
    popperInstance.value = createPopper(
      referenceElement.value,
      popperElement.value,
      {
        placement: props.placement,
        modifiers: [
          { name: "offset", options: { offset: [0, props.offset || 0] } },
          {
            name: "preventOverflow",
            options: { boundary: "clippingParents", padding: 8 },
          },
          {
            name: "flip",
            options: { fallbackPlacements: ["top-end", "bottom-end"] },
          },
        ],
      },
    );

    popperStyles.value = popperElement.value.style;
    popperAttributes.value = popperElement.value.attributes;
  }
};

onMounted(async () => {
  await nextTick();
  createOrUpdatePopper();
});

watch(
  () => [props.offset, props.placement],
  async () => {
    await nextTick();
    createOrUpdatePopper();
  },
);
</script>
<template>
  <Menu as="div" class="relative inline-block text-left">
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
      :style="popperStyles"
      class="z-10 mt-2 w-56 origin-top-right divide-y divide-secondary-100 dark:divide-secondary-700 rounded-md bg-background-light dark:bg-background-dark ring-1 shadow-lg ring-secondary-950/5 dark:ring-secondary-50/20 transition focus:outline-hidden"
      v-bind="popperAttributes"
    >
      <div v-if="headerTitle" class="px-4 py-3">
        <p
          class="text-sm font-medium text-secondary-900 dark:text-secondary-100"
        >
          {{ headerTitle }}
        </p>
        <p
          v-if="headerDescription"
          class="truncate text-sm text-secondary-700 dark:text-secondary-300"
        >
          {{ headerDescription }}
        </p>
      </div>

      <div
        v-for="(section, sectionIndex) in sections"
        :key="sectionIndex"
        class="py-1"
      >
        <MenuItem
          v-for="item in section.items"
          :key="item.id"
          v-slot="{ active }"
        >
          <button
            @click="item.onClick"
            :class="[
              'group flex items-center w-full px-4 py-2 text-left text-sm',
              active
                ? 'bg-secondary-100 text-secondary-900 dark:bg-secondary-700 dark:text-secondary-100'
                : 'text-secondary-700 dark:text-secondary-300',
            ]"
          >
            <Icon
              v-if="item.icon"
              :name="item.icon"
              aria-hidden="true"
              class="mr-3 size-5 text-secondary-400 group-data-focus:text-secondary-500 dark:text-secondary-300 dark:group-data-focus:text-secondary-300"
            />
            {{ item.label }}
          </button>
        </MenuItem>
      </div>
    </MenuItems>
  </Menu>
</template>
