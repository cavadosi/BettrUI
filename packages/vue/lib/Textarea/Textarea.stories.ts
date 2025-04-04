import { Meta, StoryObj } from "@storybook/vue3";
import Textarea from "./Textarea.vue";

const meta: Meta<typeof Textarea> = {
  title: "Vue/Textarea",
  component: Textarea,
  argTypes: {
    label: { control: "text", description: "Label for the textarea" },
    rows: { control: "number", description: "Number of rows" },
    disabled: { control: "boolean", description: "Disable the textarea" },
    placeholder: { control: "text", description: "Placeholder text" },
    id: { control: "text", description: "Textarea ID" },
    name: { control: "text", description: "Textarea name" },
    modelValue: { control: "text", description: "Textarea value" },
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    id: "comment",
    name: "comment",
    label: "Add your comment",
    rows: 4,
    disabled: false,
    placeholder: "Write your thoughts here...",
    modelValue: "",
  },
  render: (args) => ({
    components: { Textarea },
    setup() {
      return { args };
    },
    template: `<Textarea v-bind="args" v-model="args.modelValue" />`,
  }),
};

export const Disabled: Story = {
  args: {
    id: "comment",
    name: "comment",
    label: "Add your comment",
    rows: 4,
    disabled: true,
    placeholder: "Write your thoughts here...",
    modelValue: "",
  },
  render: (args) => ({
    components: { Textarea },
    setup() {
      return { args };
    },
    template: `<Textarea v-bind="args" v-model="args.modelValue" />`,
  }),
};
