import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "React/Checkbox",
  component: Checkbox,
  argTypes: {
    label: { control: "text" },
    description: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "Comments",
    description: "Get notified when someone's posts a comment on a posting.",
    id: "comments",
  },
};

export const WithNoLabel: Story = {
  args: {
    description: "Get notified when a candidate applies for a job.",
    id: "candidates",
  },
};
