import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";
import { Icon } from "../Icon/Icon";

const meta: Meta<typeof Divider> = {
  title: "React/Divider",
  component: Divider,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    children: "Or continue with",
    size: "xs",
  },
};

export const WithIcon: Story = {
  args: {
    children: <Icon name="Home" className="size-4" variant="solid" />,
    size: "xs",
  },
};
