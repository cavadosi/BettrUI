import type { Meta, StoryObj } from "@storybook/react";
import { Combobox } from "./Combobox";
import { useState } from "react";

// Declara el tipo de 'Item' aquí
interface Item {
  id: number;
  label: string;
}

const meta: Meta<typeof Combobox> = {
  title: "React/Combobox",
  component: Combobox,
  argTypes: {
    label: { control: "text" },
    icon: { control: "text" },
    selectedIcon: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Combobox>;

export const Default: Story = {
  args: {
    label: "Assign to",
    items: [
      { id: 1, label: "Leslie Alexander" },
      { id: 2, label: "Michael Jackson" },
      { id: 3, label: "Sarah Lee" },
      { id: 4, label: "David Johnson" },
    ],
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);

    const handleChange = (item: Item | null) => {
      setSelectedItem(item);
    };

    return <Combobox {...args} selectedItem={selectedItem} onChange={handleChange} />;
  },
};

export const WithCustomIcon: Story = {
  args: {
    label: "Assign to",
    items: [
      { id: 1, label: "Leslie Alexander" },
      { id: 2, label: "Michael Jackson" },
      { id: 3, label: "Sarah Lee" },
      { id: 4, label: "David Johnson" },
    ],
    icon: "ChevronDoubleDown",
    selectedIcon: "CheckBadge",
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);

    const handleChange = (item: Item | null) => {
      setSelectedItem(item);
    };

    return <Combobox {...args} selectedItem={selectedItem} onChange={handleChange} />;
  },
};
