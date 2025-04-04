import { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import Toggle from "./Toggle.vue";

const meta: Meta<typeof Toggle> = {
  title: "Vue/Toggle",
  component: Toggle,
  argTypes: {
    label: { control: "text" },
    description: { control: "text" },
    activeIcon: { control: "text" },
    inactiveIcon: { control: "text" },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
    modelValue: { table: { disable: true } }, // ocultar el control interno
  },
};

export default meta;

type Story = StoryObj<typeof Toggle>;

const render = (args: any) => ({
  components: { Toggle },
  setup() {
    const enabled = ref(args.modelValue);
    return { args, enabled };
  },
  template: `<Toggle v-bind="args" v-model="enabled" />`,
});

export const Default: Story = {
  args: {
    modelValue: false,
  },
  render,
};

export const WithIcon: Story = {
  args: {
    modelValue: false,
    activeIcon: "Sun",
    inactiveIcon: "Moon",
  },
  render,
};

export const WithLabelAndDescription: Story = {
  args: {
    label: "Enable notifications",
    description: "Receive updates and alerts",
    modelValue: true,
  },
  render,
};
