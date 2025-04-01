/* eslint-disable react-hooks/rules-of-hooks */
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { RadioGroup } from "./RadioGroup";

const meta: Meta<typeof RadioGroup> = {
  title: "React/RadioGroup",
  component: RadioGroup,
  argTypes: {
    label: { control: "text", description: "The label for the radio group" },
    description: { control: "text", description: "Description of the radio group" },
    value: { control: "text", description: "The selected value of the radio group" },
    onChange: {
      action: "changed",
      description: "Event handler when the value changes",
    },
  },
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  args: {
    items: [
      { id: "small", label: "Small", description: "4 GB RAM / 2 CPUS / 80 GB SSD Storage", value: "small" },
      { id: "medium", label: "Medium", description: "8 GB RAM / 4 CPUS / 160 GB SSD Storage", value: "medium" },
      { id: "large", label: "Large", description: "16 GB RAM / 8 CPUS / 320 GB SSD Storage", value: "large" },
    ],
    label: "Plan",
    description: "Choose the plan that fits your team.",
    value: "small", // Default selected value
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);

    const handleChange = (newValue: string) => {
      setValue(newValue);
    };

    return <RadioGroup {...args} value={value} onChange={handleChange} />;
  },
};

export const WithNoLabel: Story = {
  args: {
    items: [
      { id: "basic", label: "Basic", description: "2 GB RAM / 1 CPU / 50 GB SSD Storage", value: "basic" },
      { id: "premium", label: "Premium", description: "16 GB RAM / 8 CPUs / 500 GB SSD Storage", value: "premium" },
    ],
    value: "basic", // Default selected value
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);

    const handleChange = (newValue: string) => {
      setValue(newValue);
    };

    return <RadioGroup {...args} value={value} onChange={handleChange} />;
  },
};
