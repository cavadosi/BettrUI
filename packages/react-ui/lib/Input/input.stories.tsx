import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "React/Input",
  component: Input,
  argTypes: {
    error: { control: "text" },
    loading: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Email",
    type: "email",
    id: "email",
    placeholder: "you@example.com",
    description: "We'll only use this for spam.",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    type: "email",
    id: "email-error",
    placeholder: "you@example.com",
    error: "Not a valid email address.",
    description: "We'll only use this for spam.",
  },
};

export const WithLoading: Story = {
  args: {
    label: "Email",
    type: "email",
    id: "email-loading",
    placeholder: "you@example.com",
    loading: true,
    description: "We're checking your email.",
  },
};

export const Text: Story = {
  args: {
    label: "Username",
    type: "text",
    id: "username",
    placeholder: "Enter your username",
  },
};

export const Email: Story = {
  args: {
    label: "Email",
    type: "email",
    id: "email",
    placeholder: "you@example.com",
    description: "We'll only use this for spam.",
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    id: "password",
    placeholder: "Enter your password",
    description: "Make sure it's at least 8 characters long.",
  },
};

export const Number: Story = {
  args: {
    label: "Age",
    type: "number",
    id: "age",
    placeholder: "Enter your age",
    description: "Please enter a valid number.",
  },
};

export const Date: Story = {
  args: {
    label: "Birthdate",
    type: "date",
    id: "birthdate",
    description: "Select your birthdate.",
  },
};

export const WithLeadingIcon: Story = {
  args: {
    label: "Email",
    description: "We'll only use this for spam.",
    id: "email",
    type: "email",
    leadingIcon: "Envelope",
    placeholder: "you@example.com",
  },
};

export const WithTrailingIconError: Story = {
  args: {
    label: "Email",
    description: "We'll only use this for spam.",
    id: "email",
    type: "email",
    trailingIcon: "ExclamationCircle",
  },
};
