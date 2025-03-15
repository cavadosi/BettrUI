import React, { useState } from "react";
import { Select } from "../components/Select";

const people = [
  { id: 1, value: "Wade Cooper" },
  { id: 2, value: "Arlene Mccoy" },
  { id: 3, value: "Devon Webb" },
  { id: 4, value: "Tom Cook" },
  { id: 5, value: "Tanya Fox" },
  { id: 6, value: "Hellen Schmidt" },
  { id: 7, value: "Caroline Schultz" },
  { id: 8, value: "Mason Heaney" },
  { id: 9, value: "Claudie Smitham" },
  { id: 10, value: "Emil Schaefer" },
];

export default {
  title: "React/Select",
  component: Select,
  argTypes: {
    label: { control: "text" },
    items: { control: "object" },
  },
};

const Template = (args: React.ComponentProps<typeof Select>) => {
  const [selected, setSelected] = useState(args.items[0]);

  const handleChange = (value: (typeof people)[0]) => {
    setSelected(value);
  };

  return (
    <Select
      {...args}
      selected={selected}
      items={people}
      onChange={handleChange}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  items: people,
};

export const CustomLabel = Template.bind({});
CustomLabel.args = {
  label: "Select a user",
  items: people,
};

export const CustomIcons = Template.bind({});
CustomIcons.args = {
  label: "Select a user",
  items: people,
  icon: "ChevronDown",
  selectedIcon: "CheckBadge",
};
