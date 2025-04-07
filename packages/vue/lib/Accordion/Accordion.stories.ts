import type { Meta, StoryObj } from "@storybook/vue3";
import Accordion from "./Accordion.vue";

const meta: Meta<typeof Accordion> = {
  title: "Vue/Accordion",
  component: Accordion,
  argTypes: {
    openIcon: {
      control: { type: "text" },
      description: "Icono visible cuando el item está abierto",
    },
    closedIcon: {
      control: { type: "text" },
      description: "Icono visible cuando el item está cerrado",
    },
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
  render: (args) => ({
    components: { Accordion },
    setup() {
      return { args };
    },
    template: `<Accordion v-bind="args" />`,
  }),
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
    openIcon: "ChevronUp",
    closedIcon: "ChevronDown",
  },
  render: (args) => ({
    components: { Accordion },
    setup() {
      return { args };
    },
    template: `<Accordion v-bind="args" />`,
  }),
};
