import Badge from "../components/Badge.vue";

export default {
  title: "Vue/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "gray",
        "red",
        "yellow",
        "green",
        "blue",
        "indigo",
        "purple",
        "pink",
      ],
    },
    rounded: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg", "xl", "full"],
    },
    border: {
      control: { type: "boolean" },
    },
  },
};

const Template = (args) => ({
  components: { Badge },
  setup() {
    return { args };
  },
  template: '<Badge v-bind="args">Badge</Badge>',
});

export const Default = Template.bind({});
Default.args = {
  variant: "primary",
  rounded: "md",
  border: false,
};