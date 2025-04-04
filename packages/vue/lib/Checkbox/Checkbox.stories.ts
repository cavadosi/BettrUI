import { Meta, StoryObj } from "@storybook/vue3";
import Checkbox from "./Checkbox.vue";
import { ref } from "vue";

const meta: Meta<typeof Checkbox> = {
  title: "Vue/Checkbox",
  component: Checkbox,
  argTypes: {
    label: { control: "text" },
    description: { control: "text" },
    modelValue: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "Comments",
    description: "Get notified when someone posts a comment on a posting.",
    id: "comments",
    modelValue: false,
  },
  render: (args) => ({
    components: { Checkbox },
    setup() {
      const value = ref(args.modelValue);
      return { args, value };
    },
    template: `<Checkbox v-bind="args" v-model="value" />`,
  }),
};

export const WithNoLabel: Story = {
  args: {
    description: "Get notified when a candidate applies for a job.",
    id: "candidates",
    modelValue: false,
  },
  render: (args) => ({
    components: { Checkbox },
    setup() {
      const value = ref(args.modelValue);
      return { args, value };
    },
    template: `<Checkbox v-bind="args" v-model="value" />`,
  }),
};
