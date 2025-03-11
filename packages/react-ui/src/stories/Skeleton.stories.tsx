import React from "react";
import { Skeleton } from "../components/Skeleton";

export default {
  title: "React/Skeleton",
  component: Skeleton,
  argTypes: {
    rounded: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg", "xl", "full"],
    },
  },
};

const Template = (args: React.ComponentProps<typeof Skeleton>) => (
    <Skeleton {...args} />
)

export const Default = Template.bind({});
Default.args = {
    className: "h-12 w-12",
    rounded: "md"
}
