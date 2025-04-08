import type { Meta, StoryObj } from "@storybook/vue3";
import Container from "./Container.vue";


const meta: Meta<typeof Container> = {
  title: "Vue/Container",
  component: Container,
};

export default meta;

type Story = StoryObj<typeof Container>;

const render = (args: any) => ({
    components: { Container },
    setup() {
        return { args };
    },
    template: `<Container v-bind="args" >asd</Container>`,
});

export const Default: Story = {
    args: {
        class: "bg-secondary-200",
    },
    render,
};
