import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "./Breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
  title: "React/Breadcrumb",
  component: Breadcrumb,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    pages: [
      { icon: "Home", href: "#", current: false },
      { name: "Projects", href: "#", current: false },
      { name: "Project Nero", href: "#", current: true },
    ],
    size: "md",
  },
};

export const WithDifferentIcon: Story = {
  args: {
    icon: "ArrowRight",
    pages: [
      { icon: "Home", name: "Dashboard", href: "#", current: false },
      { name: "Settings", href: "#", current: true },
    ],
    size: "md",
  },
};

export const WithCustomLink: Story = {
  args: {
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
  },
};
