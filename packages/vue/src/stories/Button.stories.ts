import Button from "../components/Button.vue";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
  },
};

const Template = (args: any) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = { label: "Click Me" };
