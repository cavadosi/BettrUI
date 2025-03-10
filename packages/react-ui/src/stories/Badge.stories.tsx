import React from "react";
import { Badge } from "../components/Badge";

export default {
  title: "React/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "primary",
        "gray",
        "red",
        "yellow",
        "green",
        "blue",
        "indigo",
        "purple",
        "pink",
      ],
    },
    rounded: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg", "xl", "full"],
    },
    border: {
      control: { type: "boolean" },
    },
  },
};

const Template = (args: React.ComponentProps<typeof Badge>) => (
  <Badge {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Badge",
  variant: "primary",
  rounded: "md",
  border: false
};
