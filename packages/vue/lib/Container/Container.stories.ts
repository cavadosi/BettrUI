import type { Meta, StoryObj } from "@storybook/vue3";
import Container from "./Container.vue";


const meta: Meta<typeof Container> = {
  title: "Vue/Container",
  component: Container,
  argTypes: {
    children: {
        control: "text",
        description: "Text content of the container",
    },
  } ,
};

export default meta;

type Story = StoryObj<typeof Container>;

const render = (args: any) => ({
    components: { Container },
    setup() {
        return { args };
    },
    template: `<Container v-bind="args" />`,
});

export const Default: Story = {
    args: {
        class: "bg-secondary-200",
        children: "This is a container",
    },
    render,
};
