import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "React/Accordion",
  component: Accordion,
  argTypes: {
    closedIcon: { control: "text" },
    openIcon: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
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
  },
};

export const WithCustomIcon: Story = {
  args: {
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
  },
};
