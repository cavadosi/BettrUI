import React, { useState } from 'react';
import { Toggle } from '../components/Toggle';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

export default {
  title: 'React/Toggle',
  component: Toggle,
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    enabled: { control: 'boolean' },
  },
};

const Template = (args: React.ComponentProps<typeof Toggle>) => {
  const [enabled, setEnabled] = useState(args.enabled);

  const handleChange = (value: boolean) => {
    setEnabled(value);
  };

  return <Toggle {...args} enabled={enabled} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  enabled: false,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  enabled: false,
  activeIcon: "Sun",
  inactiveIcon: "Moon",
};

export const WithLabelAndDescription = Template.bind({});
WithLabelAndDescription.args = {
  label: 'Enable notifications',
  description: 'Receive updates and alerts',
  enabled: true,
};

