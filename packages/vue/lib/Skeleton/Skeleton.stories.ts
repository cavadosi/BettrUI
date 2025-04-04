import type { Meta, StoryObj } from "@storybook/vue3";
import Skeleton from "./Skeleton.vue";

const meta: Meta<typeof Skeleton> = {
  title: "Vue/Skeleton",
  component: Skeleton,
  argTypes: {
    rounded: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg", "xl", "full"],
    },
    className: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    className: "h-12 w-12",
    rounded: "md",
  },
  render: (args) => ({
    components: { Skeleton },
    setup() {
      return { args };
    },
    template: `<Skeleton v-bind="args" />`,
  }),
};
