/* eslint-disable react-hooks/rules-of-hooks */
import { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "React/Textarea",
  component: Textarea,
  argTypes: {
    label: { control: "text", description: "Label for the textarea" },
    rows: { control: "number", description: "Number of rows" },
    disabled: { control: "boolean", description: "Disable the textarea" },
    placeholder: { control: "text", description: "Placeholder text" },
    id: { control: "text", description: "Textarea ID" },
    name: { control: "text", description: "Textarea name" },
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    id: "comment",
    name: "comment",
    label: "Add your comment",
    rows: 4,
    disabled: false,
    placeholder: "Write your thoughts here...",
  },
  render: (args) => {
    const [value, setValue] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(event.target.value);
    };

    return <Textarea {...args} value={value} onChange={handleChange} />;
  },
};

export const Disabled: Story = {
  args: {
    id: "comment",
    name: "comment",
    label: "Add your comment",
    rows: 4,
    disabled: true,
    placeholder: "Write your thoughts here...",
  },
  render: (args) => {
    const [value, setValue] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(event.target.value);
    };

    return <Textarea {...args} value={value} onChange={handleChange} />;
  },
};
