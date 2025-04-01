import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "React/Card",
  component: Card,
  argTypes: {
    rounded: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg", "xl"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    rounded: "md",
    children: <Card.Content>Main content of the card goes here.</Card.Content>,
  },
};

export const WithHeader: Story = {
  args: {
    rounded: "md",
    children: (
      <>
        <Card.Header>Card Header</Card.Header>
        <Card.Content>Main content of the card goes here.</Card.Content>
      </>
    ),
  },
};

export const WithHeaderAndFooter: Story = {
  args: {
    rounded: "md",
    children: (
      <>
        <Card.Header>Card Header</Card.Header>
        <Card.Content>Main content of the card goes here.</Card.Content>
        <Card.Footer>Card Footer</Card.Footer>
      </>
    ),
  },
};
