import React from "react";
import {Icon} from "../components/Icon";

export default {
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

const Template = (args: React.ComponentProps<typeof Icon>) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Home",
  variant: "outline",
  className: "size-8 text-primary-500",
};
