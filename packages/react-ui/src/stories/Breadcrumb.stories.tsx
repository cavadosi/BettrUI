import React from "react";
import { Breadcrumb } from "../components/Breadcrumb";
import { Icon } from "../components/Icon";

export default {
  title: "React/Breadcrumb",
  component: Breadcrumb,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
  },
};

const Template = (args: React.ComponentProps<typeof Breadcrumb>) => (
  <Breadcrumb {...args} />
);

export const Default = Template.bind({});
Default.args = {
  pages: [
    { icon: "Home", href: "#", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "Project Nero", href: "#", current: true },
  ],
  size: "md",
};

export const WithDifferentIcon = Template.bind({});
WithDifferentIcon.args = {
  icon: "ArrowRight",
  pages: [
    { icon: "Home", name: "Dashboard", href: "#", current: false },
    { name: "Settings", href: "#", current: true },
  ],
  size: "md",
};

export const WithCustomLink = Template.bind({});
WithCustomLink.args = {
  pages: [
    { name: "Home", href: "#", current: false },
    { name: "Profile", href: "#", current: false },
    { icon: "User", name: "Account", href: "#", current: true },
  ],
  size: "md",
  children: (page) => (
    <Breadcrumb.Link
      page={page}
      className="text-blue-500 hover:underline hover:text-blue-500"
    />
  ),
};

