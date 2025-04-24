import type { Meta, StoryObj } from "@storybook/vue3";
import Divider from "./Divider.vue";
import Icon from "../Icon/Icon.vue";

const meta: Meta<typeof Divider> = {
  title: "Vue/Divider",
  component: Divider,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  render: (args) => ({
    components: { Divider },
    setup: () => ({ args }),
    template: `<Divider v-bind="args" />`,
  }),
};

export const WithLabel: Story = {
  render: (args) => ({
    components: { Divider },
    setup: () => ({ args }),
    template: `<Divider v-bind="args">Or continue with</Divider>`,
  }),
  args: {
    size: "xs",
  },
};

export const WithIcon: Story = {
  render: (args) => ({
    components: { Divider, Icon },
    setup: () => ({ args }),
    template: `<Divider v-bind="args"><Icon name="Home" class="size-4" variant="solid" /></Divider>`,
  }),
  args: {
    size: "xs",
  },
};
