import { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "React/Skeleton",
  component: Skeleton,
  argTypes: {
    rounded: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg", "xl", "full"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    className: "h-12 w-12",
    rounded: "md",
  },
  render: (args) => <Skeleton {...args} />,
};
