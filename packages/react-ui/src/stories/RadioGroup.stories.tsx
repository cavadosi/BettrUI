import React, { useState } from "react";
import { RadioGroup } from "../components/RadioGroup";

export default {
  title: "React/RadioGroup",
  component: RadioGroup,
  argTypes: {
    items: {
      control: "array",
      description: "Array of plan items to display",
    },
    label: { control: "text", description: "The label for the radio group" },
    description: { control: "text", description: "Description of the radio group" },
    value: { control: "text", description: "The selected value of the radio group" },
    onChange: {
      action: "changed",
      description: "Event handler when the value changes",
    },
  },
};

const Template = (args: React.ComponentProps<typeof RadioGroup>) => {
  const [value, setValue] = useState(args.value);

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <RadioGroup {...args} value={value} onChange={handleChange} />
  );
};

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: "small", label: "Small", description: "4 GB RAM / 2 CPUS / 80 GB SSD Storage", value: "small" },
    { id: "medium", label: "Medium", description: "8 GB RAM / 4 CPUS / 160 GB SSD Storage", value: "medium" },
    { id: "large", label: "Large", description: "16 GB RAM / 8 CPUS / 320 GB SSD Storage", value: "large" },
  ],
  label: "Plan",
  description: "Choose the plan that fits your team.",
  value: "small", // Default selected value
};

export const WithNoLabel = Template.bind({});
WithNoLabel.args = {
  items: [
    { id: "basic", label: "Basic", description: "2 GB RAM / 1 CPU / 50 GB SSD Storage", value: "basic" },
    { id: "premium", label: "Premium", description: "16 GB RAM / 8 CPUs / 500 GB SSD Storage", value: "premium" },
  ],
  value: "basic", // Default selected value
};
