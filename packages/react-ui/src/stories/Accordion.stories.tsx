import React from "react";
import { Accordion } from "../components/Accordion";

export default {
  title: "React/Accordion",
  component: Accordion,
  argTypes: {
    items: { control: "array" },
    closedIcon: { control: "text" },
    openIcon: { control: "text" },
  },
};

const Template = (args: React.ComponentProps<typeof Accordion>) => (
  <Accordion {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      id: 1,
      label: "What's the best thing about Switzerland?",
      description:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 2,
      label: "Why are mountains so great?",
      description:
        "Mountains are majestic and inspire a sense of adventure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
  ],
};

export const WithCustomIcon = Template.bind({});
WithCustomIcon.args = {
  items: [
    {
      id: 1,
      label: "What's the best thing about Switzerland?",
      description:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 2,
      label: "Why are mountains so great?",
      description:
        "Mountains are majestic and inspire a sense of adventure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
  ],
  closedIcon: "ChevronDown",
  openIcon: "ChevronUp",
};
