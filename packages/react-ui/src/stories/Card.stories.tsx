import React from "react";
import { Card } from "../components/Card";

export default {
  title: "React/Card",
  component: Card,
  argTypes: {
    rounded: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg", "xl"],
    },
  },
};

const Template = (args: React.ComponentProps<typeof Card>) => (
  <Card {...args} />
);

export const Default = Template.bind({});
Default.args = {
  rounded: "md",
  children: (
    <>
      <Card.Content>Main content of the card goes here.</Card.Content>
    </>
  ),
};

export const WithHeader = Template.bind({});
WithHeader.args = {
  rounded: "md",
  children: (
    <>
      <Card.Header>Card Header</Card.Header>
      <Card.Content>Main content of the card goes here.</Card.Content>
    </>
  ),
};

export const WithHeaderAndFooter = Template.bind({});
WithHeaderAndFooter.args = {
  rounded: "md",
  children: (
    <>
      <Card.Header>Card Header</Card.Header>
      <Card.Content>Main content of the card goes here.</Card.Content>
      <Card.Footer>Card Footer</Card.Footer>
    </>
  ),
};
