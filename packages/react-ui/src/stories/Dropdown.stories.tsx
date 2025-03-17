import React from "react";
import { Dropdown } from "../components/Dropdown";

export default {
  title: "React/Dropdown",
  component: Dropdown,
  argTypes: {
    label: { control: "text" },
    sections: { control: "object" },
    icon: { control: "text" },
    headerTitle: { control: "text" },
    headerDescription: { control: "text" },
    buttonVariant: {
      control: {
        type: "radio",
        options: ["solid", "link", "outline", "soft", "ghost", "secondary"],
      },
    },
    buttonSize: {
      control: {
        type: "radio",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    buttonRounded: {
      control: {
        type: "radio",
        options: ["none", "sm", "md", "lg", "xl", "full"],
      },
    },
  },
};

const Template = (args: React.ComponentProps<typeof Dropdown>) => (
  <Dropdown {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Options",
  sections: [
    {
      items: [
        { id: 1, label: "Profile", onClick: () => alert("Profile clicked") },
        { id: 2, label: "Settings", onClick: () => alert("Settings clicked") },
        { id: 3, label: "Logout", onClick: () => alert("Logout clicked") },
      ],
    },
  ],
  buttonVariant: "secondary", // Default variant
  buttonSize: "sm", // Default size
  buttonRounded: "md", // Default rounded
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  label: "Actions",
  icon: "CheckBadge",
  sections: [
    {
      items: [
        {
          id: 1,
          label: "Profile",
          icon: "User",
          onClick: () => alert("Profile clicked"),
        },
        {
          id: 2,
          label: "Settings",
          icon: "Cog",
          onClick: () => alert("Settings clicked"),
        },
        {
          id: 3,
          label: "Logout",
          icon: "Logout",
          onClick: () => alert("Logout clicked"),
        },
      ],
    },
  ],
  buttonVariant: "outline", // Example of custom variant
  buttonSize: "md", // Example of custom size
  buttonRounded: "lg", // Example of custom rounded
};

export const MultiSection = Template.bind({});
MultiSection.args = {
  label: "More Options",
  headerTitle: "Settings",
  headerDescription: "Manage your preferences",
  sections: [
    {
      items: [
        {
          id: 1,
          label: "Account",
          icon: "User",
          onClick: () => alert("Account clicked"),
        },
        {
          id: 2,
          label: "Preferences",
          icon: "Cog",
          onClick: () => alert("Preferences clicked"),
        },
      ],
    },
    {
      items: [
        {
          id: 3,
          label: "Logout",
          icon: "Logout",
          onClick: () => alert("Logout clicked"),
        },
      ],
    },
  ],
  buttonVariant: "solid", // Custom variant for this story
  buttonSize: "lg", // Custom size
  buttonRounded: "xl", // Custom rounded
};

export const WithOffset = Template.bind({});
WithOffset.args = {
  label: "Options",
  sections: [
    {
      items: [
        { id: 1, label: "Profile", onClick: () => alert("Profile clicked") },
        { id: 2, label: "Settings", onClick: () => alert("Settings clicked") },
        { id: 3, label: "Logout", onClick: () => alert("Logout clicked") },
      ],
    },
  ],
  placement: "right-start",
  offset: 10,
  className: "px-20 pt-10",
  buttonVariant: "soft",
  buttonSize: "xs", 
  buttonRounded: "none", 
};
