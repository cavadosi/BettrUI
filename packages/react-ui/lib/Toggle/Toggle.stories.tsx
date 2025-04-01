/* eslint-disable react-hooks/rules-of-hooks */
import { Meta, StoryObj } from "@storybook/react";
import { useState } from 'react';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'React/Toggle',
  component: Toggle,
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    enabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    enabled: false,
  },
  render: (args) => {
    const [enabled, setEnabled] = useState(args.enabled);

    const handleChange = (value: boolean) => {
      setEnabled(value);
    };

    return <Toggle {...args} enabled={enabled} onChange={handleChange} />;
  },
};

export const WithIcon: Story = {
  args: {
    enabled: false,
    activeIcon: "Sun",
    inactiveIcon: "Moon",
  },
  render: (args) => {
    const [enabled, setEnabled] = useState(args.enabled);

    const handleChange = (value: boolean) => {
      setEnabled(value);
    };

    return <Toggle {...args} enabled={enabled} onChange={handleChange} />;
  },
};

export const WithLabelAndDescription: Story = {
  args: {
    label: 'Enable notifications',
    description: 'Receive updates and alerts',
    enabled: true,
  },
  render: (args) => {
    const [enabled, setEnabled] = useState(args.enabled);

    const handleChange = (value: boolean) => {
      setEnabled(value);
    };

    return <Toggle {...args} enabled={enabled} onChange={handleChange} />;
  },
};
