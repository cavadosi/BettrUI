import { Meta, StoryObj } from "@storybook/vue3";
import Icon from "./Icon.vue";

const meta: Meta<typeof Icon> = {
  title: "Vue/Icon",
  component: Icon,
  argTypes: {
    name: {
      control: { type: "text" },
      description: "Name of the icon (e.g., 'Home')",
    },
    variant: {
      control: { type: "select" },
      options: ["solid", "outline"],
      description: "Style variant of the icon",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

const render = (args: any) => ({
  components: { Icon },
  setup() {
    return { args };
  },
  template: `<Icon v-bind="args" class="size-8 text-primary-500" />`,
});

export const Default: Story = {
  args: {
    name: "Home",
    variant: "outline",
  },
  render,
};
