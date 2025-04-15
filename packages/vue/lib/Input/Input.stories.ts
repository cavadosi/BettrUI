import type { Meta, StoryObj } from "@storybook/vue3";
import Input from "./Input.vue";
import { ref } from "vue";

const meta: Meta<typeof Input> = {
  title: "Vue/Input",
  component: Input,
  argTypes: {
    error: { control: "text" },
    loading: { control: "boolean" },
    label: { control: "text" },
    description: { control: "text" },
    type: { control: "text" },
    placeholder: { control: "text" },
    leadingIcon: { control: "text" },
    trailingIcon: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

const render = (args: any) => ({
  components: { Input },
  setup() {
    const modelValue = ref("");
    return { args, modelValue };
  },
  template: `<Input v-bind="args" v-model="modelValue" />`,
});

export const Default: Story = {
  args: {
    label: "Email",
    type: "email",
    id: "email",
    placeholder: "you@example.com",
    description: "We'll only use this for spam.",
  },
  render,
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
  render,
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
  render,
};

export const Text: Story = {
  args: {
    label: "Username",
    type: "text",
    id: "username",
    placeholder: "Enter your username",
  },
  render,
};

export const Email: Story = {
  args: {
    label: "Email",
    type: "email",
    id: "email",
    placeholder: "you@example.com",
    description: "We'll only use this for spam.",
  },
  render,
};

export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    id: "password",
    placeholder: "Enter your password",
    description: "Make sure it's at least 8 characters long.",
  },
  render,
};

export const Number: Story = {
  args: {
    label: "Age",
    type: "number",
    id: "age",
    placeholder: "Enter your age",
    description: "Please enter a valid number.",
  },
  render,
};

export const Date: Story = {
  args: {
    label: "Birthdate",
    type: "date",
    id: "birthdate",
    description: "Select your birthdate.",
  },
  render,
};

export const WithLeadingIcon: Story = {
  args: {
    label: "Email",
    description: "We'll only use this for spam.",
    id: "email-icon",
    type: "email",
    leadingIcon: "Envelope",
    placeholder: "you@example.com",
  },
  render,
};

export const WithTrailingIconError: Story = {
  args: {
    label: "Email",
    description: "We'll only use this for spam.",
    id: "email-trailing",
    type: "email",
    trailingIcon: "ExclamationCircle",
  },
  render,
};
