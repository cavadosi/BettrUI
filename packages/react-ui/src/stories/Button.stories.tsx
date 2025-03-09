import React from "react";
import { Button } from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["solid", "link", "outline", "soft", "ghost"],
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    rounded: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg", "xl", "full"],
    },
    className: {
      control: {type: "text"}
    }
  },
};

const Template = (args: React.ComponentProps<typeof Button>) => (
  <Button {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Click Me",
  variant: "solid",
  size: "md",
  rounded: "md",
  className: ""
};
