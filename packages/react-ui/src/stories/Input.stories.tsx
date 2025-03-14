import React from "react";
import { Input } from "../components/Input"

export default {
  title: "React/Input",
  component: Input,
  argTypes: {
    error: { control: "text" },
    loading: { control: "boolean" },
  },
};

const Template = (args: React.ComponentProps<typeof Input>) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Email",
  type: "email",
  id: "email",
  placeholder: "you@example.com",
  description: "We'll only use this for spam.",
};

export const WithError = Template.bind({});
WithError.args = {
  label: "Email",
  type: "email",
  id: "email-error",
  placeholder: "you@example.com",
  error: "Not a valid email address.",
  description: "We'll only use this for spam.",
};

export const WithLoading = Template.bind({});
WithLoading.args = {
  label: "Email",
  type: "email",
  id: "email-loading",
  placeholder: "you@example.com",
  loading: true,
  description: "We're checking your email.",
};

export const Text = Template.bind({});
Text.args = {
  label: "Username",
  type: "text",
  id: "username",
  placeholder: "Enter your username",
};

export const Email = Template.bind({});
Email.args = {
  label: "Email",
  type: "email",
  id: "email",
  placeholder: "you@example.com",
  description: "We'll only use this for spam.",
};

export const Password = Template.bind({});
Password.args = {
  label: "Password",
  type: "password",
  id: "password",
  placeholder: "Enter your password",
  description: "Make sure it's at least 8 characters long.",
};

export const Number = Template.bind({});
Number.args = {
  label: "Age",
  type: "number",
  id: "age",
  placeholder: "Enter your age",
  description: "Please enter a valid number.",
};

export const Date = Template.bind({});
Date.args = {
  label: "Birthdate",
  type: "date",
  id: "birthdate",
  description: "Select your birthdate.",
};

export const WithLeadingIcon = Template.bind({});
WithLeadingIcon.args = {
  label: "Email",
  description: "We'll only use this for spam.",
  id: "email",
  type: "email",
  leadingIcon: "Envelope",
  placeholder: "you@example.com",
};

export const WithTrailingIconError = Template.bind({});
WithTrailingIconError.args = {
  label: "Email",
  description: "We'll only use this for spam.",
  id: "email",
  type: "email",
  trailingIcon: "ExclamationCircle",
};