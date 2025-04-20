import SelectVue from "./Select.vue";
import { ref } from "vue";
import type { Meta, StoryFn } from "@storybook/vue3";

const people = [
  { id: 1, value: "Wade Cooper" },
  { id: 2, value: "Arlene Mccoy" },
  { id: 3, value: "Devon Webb" },
  { id: 4, value: "Tom Cook" },
  { id: 5, value: "Tanya Fox" },
  { id: 6, value: "Hellen Schmidt" },
  { id: 7, value: "Caroline Schultz" },
  { id: 8, value: "Mason Heaney" },
  { id: 9, value: "Claudie Smitham" },
  { id: 10, value: "Emil Schaefer" },
];

const meta: Meta<typeof SelectVue> = {
  title: "Vue/Select",
  component: SelectVue,
  argTypes: {
    label: { control: "text" },
    items: { control: "object" },
    icon: { control: "text" },
    selectedIcon: { control: "text" },
    className: { control: "text" },
  },
};
export default meta;

export const Default: StoryFn<typeof SelectVue> = (args) => ({
  components: { SelectVue },
  setup() {
    const selected = ref(args.items[0]);
    return { args, selected };
  },
  template: `
    <SelectVue v-bind="args" v-model:selected="selected" />
  `,
});
Default.args = {
  items: people,
};

export const CustomLabel: StoryFn<typeof SelectVue> = (args) => ({
  components: { SelectVue },
  setup() {
    const selected = ref(args.items[0]);
    return { args, selected };
  },
  template: `
    <SelectVue v-bind="args" v-model:selected="selected" />
  `,
});
CustomLabel.args = {
  label: "Select a user",
  items: people,
};

export const CustomIcons: StoryFn<typeof SelectVue> = (args) => ({
  components: { SelectVue },
  setup() {
    const selected = ref(args.items[0]);
    return { args, selected };
  },
  template: `
    <SelectVue v-bind="args" v-model:selected="selected" />
  `,
});
CustomIcons.args = {
  label: "Select a user",
  icon: "ChevronDown",
  selectedIcon: "CheckBadge",
  items: people,
};
