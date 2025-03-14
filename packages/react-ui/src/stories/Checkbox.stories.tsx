import React from "react";
import { Checkbox } from "../components/Checkbox";

export default {
  title: "React/Checkbox",
  component: Checkbox,
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
  },
};

const Template = (args: React.ComponentProps<typeof Checkbox>) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Comments",
  description: "Get notified when someone's posts a comment on a posting.",
  id: "comments",
};

export const WithNoLabel = Template.bind({});
WithNoLabel.args = {
//   label: "Candidates",
  description: "Get notified when a candidate applies for a job.",
  id: "candidates",
};

