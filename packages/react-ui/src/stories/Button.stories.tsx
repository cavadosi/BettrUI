import React from 'react';
import { Button } from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args: { children: React.ReactNode }) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Click Me',
};

export const CustomText = Template.bind({});
CustomText.args = {
  children: 'Custom Text',
};
