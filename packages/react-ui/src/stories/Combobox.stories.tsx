import React, { useState } from 'react';
import { Combobox } from '../components/Combobox';

// Declara el tipo de 'Item' aquí
interface Item {
  id: number;
  label: string;
}

export default {
  title: 'React/Combobox',
  component: Combobox,
  argTypes: {
    items: { control: 'array' },
    label: { control: 'text' },
    icon: { control: 'text' },
    selectedIcon: { control: 'text' },
  },
};

const Template = (args: React.ComponentProps<typeof Combobox>) => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handleChange = (item: Item | null) => {
    setSelectedItem(item);
  };

  return (
    <Combobox
      {...args}
      selectedItem={selectedItem}
      onChange={handleChange}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Assign to',
  items: [
    { id: 1, label: 'Leslie Alexander' },
    { id: 2, label: 'Michael Jackson' },
    { id: 3, label: 'Sarah Lee' },
    { id: 4, label: 'David Johnson' },
  ],
};

export const WithCustomIcon = Template.bind({});
WithCustomIcon.args = {
  label: 'Assign to',
  items: [
    { id: 1, label: 'Leslie Alexander' },
    { id: 2, label: 'Michael Jackson' },
    { id: 3, label: 'Sarah Lee' },
    { id: 4, label: 'David Johnson' },
  ],
  icon: 'ChevronDoubleDown', 
  selectedIcon: 'CheckBadge', 
};
