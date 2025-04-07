import type { Meta, StoryObj } from "@storybook/vue3";
import Combobox from "./Combobox.vue";
import { ref } from "vue";

interface Item {
  id: number;
  label: string;
}

const meta: Meta<typeof Combobox> = {
  title: "Vue/Combobox",
  component: Combobox,
  argTypes: {
    label: { control: "text" },
    icon: { control: "text" },
    selectedIcon: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Combobox>;

export const Default: Story = {
  render: (args) => ({
    components: { Combobox },
    setup() {
      const selectedItem = ref<Item | null>(null);
      const handleUpdate = (item: Item | null) => {
        selectedItem.value = item;
      };

      return {
        args,
        selectedItem,
        handleUpdate,
      };
    },
    template: `
      <Combobox
        v-bind="args"
        :selectedItem="selectedItem"
        @update:selectedItem="handleUpdate"
      />
    `,
  }),
  args: {
    label: "Assign to",
    items: [
      { id: 1, label: "Leslie Alexander" },
      { id: 2, label: "Michael Jackson" },
      { id: 3, label: "Sarah Lee" },
      { id: 4, label: "David Johnson" },
    ],
  },
};

export const WithCustomIcon: Story = {
  render: (args) => ({
    components: { Combobox },
    setup() {
      const selectedItem = ref<Item | null>(null);
      const handleUpdate = (item: Item | null) => {
        selectedItem.value = item;
      };

      return {
        args,
        selectedItem,
        handleUpdate,
      };
    },
    template: `
      <Combobox
        v-bind="args"
        :selectedItem="selectedItem"
        @update:selectedItem="handleUpdate"
      />
    `,
  }),
  args: {
    label: "Assign to",
    icon: "ChevronDoubleDown",
    selectedIcon: "CheckBadge",
    items: [
      { id: 1, label: "Leslie Alexander" },
      { id: 2, label: "Michael Jackson" },
      { id: 3, label: "Sarah Lee" },
      { id: 4, label: "David Johnson" },
    ],
  },
};
