import type { Meta, StoryObj } from "@storybook/vue3";
import Card from "../components/Card.vue";

const meta: Meta<typeof Card> = {
  title: "Vue/Card",
  component: Card,
  argTypes: {
    rounded: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg", "xl"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    rounded: "md",
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: `<Card v-bind="args" class="p-4 w-96">Main content of the card goes here.</Card>`,
  }),
};

export const WithHeader: Story = {
  args: {
    rounded: "md",
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: `
      <Card v-bind="args" class="w-96">
        <div class="p-4 border-b">Card Header</div>
        <div class="p-4">Main content of the card goes here.</div>
      </Card>
    `,
  }),
};

export const WithHeaderAndFooter: Story = {
  args: {
    rounded: "md",
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: `
      <Card v-bind="args" class="w-96">
        <div class="p-4 border-b">Card Header</div>
        <div class="p-4">Main content of the card goes here.</div>
        <div class="p-4 border-b">Card Footer</div>
      </Card>
    `,
  }),
};
