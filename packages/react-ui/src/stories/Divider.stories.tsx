import React from "react";
import { Divider } from "../components/Divider";
import {Icon} from "../components/Icon";

export default {
  title: "React/Divider",
  component: Divider,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs","sm", "md", "lg", "xl"],
    },
  },
};

const Template = (args: React.ComponentProps<typeof Divider>) => (
  <Divider {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const WithLabel = Template.bind({});
WithLabel.args = {
  children: "Or continue with",
  size: "xs",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: <Icon name="Home" className="size-4" variant="solid"/>,
  size: "xs",
};

