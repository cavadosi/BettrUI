import { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "React/Tabs",
  component: Tabs,
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs>
      <Tabs.List>
        <Tabs.Button>Tab 1</Tabs.Button>
        <Tabs.Button>Tab 2</Tabs.Button>
        <Tabs.Button>Tab 3</Tabs.Button>
      </Tabs.List>
      <Tabs.Content>
        <p>Content for Tab 1</p>
      </Tabs.Content>
      <Tabs.Content>
        <p>Content for Tab 2</p>
      </Tabs.Content>
      <Tabs.Content>
        <p>Content for Tab 3</p>
      </Tabs.Content>
    </Tabs>
  ),
};
