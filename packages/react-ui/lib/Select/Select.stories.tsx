/* eslint-disable react-hooks/rules-of-hooks */
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Select } from "./Select";

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

const meta: Meta<typeof Select> = {
  title: "React/Select",
  component: Select,
  argTypes: {
    label: { control: "text" },
    items: { control: "object" },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    items: people,
  },
  render: (args) => {
    const [selected, setSelected] = useState(args.items[0]);

    const handleChange = (value: (typeof people)[0]) => {
      setSelected(value);
    };

    return <Select {...args} selected={selected} items={people} onChange={handleChange} />;
  },
};

export const CustomLabel: Story = {
  args: {
    label: "Select a user",
    items: people,
  },
  render: (args) => {
    const [selected, setSelected] = useState(args.items[0]);

    const handleChange = (value: (typeof people)[0]) => {
      setSelected(value);
    };

    return <Select {...args} selected={selected} items={people} onChange={handleChange} />;
  },
};

export const CustomIcons: Story = {
  args: {
    label: "Select a user",
    items: people,
    icon: "ChevronDown",
    selectedIcon: "CheckBadge",
  },
  render: (args) => {
    const [selected, setSelected] = useState(args.items[0]);

    const handleChange = (value: (typeof people)[0]) => {
      setSelected(value);
    };

    return <Select {...args} selected={selected} items={people} onChange={handleChange} />;
  },
};
