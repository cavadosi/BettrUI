import { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import RadioGroup from "./RadioGroup.vue";

const meta: Meta<typeof RadioGroup> = {
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

export default meta;

type Story = StoryObj<typeof RadioGroup>;

const render = (args: any) => ({
  components: { RadioGroup },
  setup() {
    const selected = ref(args.modelValue);
    return { args, selected };
  },
  template: `
    <RadioGroup v-bind="args" v-model="selected" />
    <p class="mt-4 text-sm text-gray-500">Selected: {{ selected }}</p>
  `,
});

export const Default: Story = {
  args: {
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
  },
  render,
};

export const WithNoLabel: Story = {
  args: {
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
  },
  render,
};
