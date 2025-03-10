import React from "react";
import { Avatar } from "../components/Avatar";

export default {
  title: "React/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    rounded: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg", "xl", "full"],
    },
    src: {
        control: { type: "text"}
    },
    alt: {
        control: { type: "text"}
    }
  },
};

const Template = (args: React.ComponentProps<typeof Avatar>) => (
  <Avatar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: "md",
  rounded: "md",
  src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  alt: "User avatar"
};
