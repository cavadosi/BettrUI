import RadioGroup from "./RadioGroup.vue";

export default {
  title: "Vue/RadioGroup",
  component: RadioGroup,
  argTypes: {
    label: {
      control: "text",
      description: "The label for the radio group",
    },
    description: {
      control: "text",
      description: "Description of the radio group",
    },
    modelValue: {
      control: "text",
      description: "Currently selected value",
    },
  },
};

const Template = (args: any) => ({
  components: { RadioGroup },
  setup() {
    return { args };
  },
  template: `
    <RadioGroup v-bind="args" v-model="args.modelValue" />
    <p class="mt-4 text-sm text-gray-500">Selected: {{ args.modelValue }}</p>
  `,
});

export const Default = Template.bind({});
Default.args = {
  label: "Plan",
  description: "Choose the plan that fits your team.",
  modelValue: "small",
  items: [
    {
      id: "small",
      label: "Small",
      description: "4 GB RAM / 2 CPUS / 80 GB SSD Storage",
      value: "small",
    },
    {
      id: "medium",
      label: "Medium",
      description: "8 GB RAM / 4 CPUS / 160 GB SSD Storage",
      value: "medium",
    },
    {
      id: "large",
      label: "Large",
      description: "16 GB RAM / 8 CPUS / 320 GB SSD Storage",
      value: "large",
    },
  ],
};

export const WithNoLabel = Template.bind({});
WithNoLabel.args = {
  label: "",
  description: "",
  modelValue: "basic",
  items: [
    {
      id: "basic",
      label: "Basic",
      description: "2 GB RAM / 1 CPU / 50 GB SSD Storage",
      value: "basic",
    },
    {
      id: "premium",
      label: "Premium",
      description: "16 GB RAM / 8 CPUs / 500 GB SSD Storage",
      value: "premium",
    },
  ],
};
