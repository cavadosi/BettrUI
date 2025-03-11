import Button from "../components/Button.vue";

export default {
  title: "Vue/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["solid", "link", "outline", "soft", "ghost", "secondary"],
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    rounded: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg", "xl", "full"],
    },
  },
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args">{{ args.label }}</Button>',
});

export const Default = Template.bind({});
Default.args = {
  label: "Click Me",
  variant: "solid",
  size: "md",
  rounded: "md",
};
