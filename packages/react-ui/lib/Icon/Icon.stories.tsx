import { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "React/Icon",
  component: Icon,
  argTypes: {
    name: {
      control: { type: "text" },
    },
    variant: {
      control: { type: "select" },
      options: ["solid", "outline"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: "Home",
    variant: "outline",
    className: "h-10 w-10 text-primary-500",
  },
};
