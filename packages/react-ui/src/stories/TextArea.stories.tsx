import React, { useState } from "react";
import { TextArea } from "../components/TextArea";

export default {
  title: "React/TextArea",
  component: TextArea,
  argTypes: {
    label: { control: "text", description: "Label for the textarea" },
    rows: { control: "number", description: "Number of rows" },
    disabled: { control: "boolean", description: "Disable the textarea" },
    placeholder: { control: "text", description: "Placeholder text" },
    id: { control: "text", description: "Textarea ID" },
    name: { control: "text", description: "Textarea name" },
  },
};

const Template = (args: any) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return <TextArea {...args} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  id: "comment",
  name: "comment",
  label: "Add your comment",
  rows: 4,
  disabled: false,
  placeholder: "Write your thoughts here...",
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: "comment",
  name: "comment",
  label: "Add your comment",
  rows: 4,
  disabled: true,
  placeholder: "Write your thoughts here...",
};
