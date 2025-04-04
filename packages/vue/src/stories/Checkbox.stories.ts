import { Meta, StoryObj } from "@storybook/vue3";
import CheckBox from "../components/CheckBox.vue";

const meta: Meta<typeof CheckBox> = {
  title: "Vue/Checkbox",
  component: CheckBox,
  argTypes: {
    label: { control: "text" },
    description: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof CheckBox>;

export const Default: Story = {
  args: {
    label: "Comments",
    description: "Get notified when someone posts a comment on a posting.",
    id: "comments",
    modelValue: false,
  },
};

export const WithNoLabel: Story = {
  args: {
    description: "Get notified when a candidate applies for a job.",
    id: "candidates",
    modelValue: false,
  },
};
