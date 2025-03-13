import React from "react";
import { Container } from "../components/Container";

export default {
  title: "React/Container",
  component: Container,
};

const Template = (args: React.ComponentProps<typeof Container>) => (
  <Container {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: "bg-secondary-200",
  children: "This is a container",
};
