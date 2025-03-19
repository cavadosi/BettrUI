import React from "react";
import Tabs from "../components/Tabs";

export default {
  title: "React/Tabs",
  component: Tabs,
  argTypes: {
    children: { control: "text" },
    tab1Content: { control: "text" },
    tab2Content: { control: "text" },
    tab3Content: { control: "text" },
  },
};

const Template = (args) => (
  <Tabs>
    <Tabs.List>
      <Tabs.Button>Tab 1</Tabs.Button>
      <Tabs.Button>Tab 2</Tabs.Button>
      <Tabs.Button>Tab 3</Tabs.Button>
    </Tabs.List>
    <Tabs.Content>
      <p>{args.tab1Content || "Content for Tab 1"}</p>
    </Tabs.Content>
    <Tabs.Content>
      <p>{args.tab2Content || "Content for Tab 2"}</p>
    </Tabs.Content>
    <Tabs.Content>
      <p>{args.tab3Content || "Content for Tab 3"}</p>
    </Tabs.Content>
  </Tabs>
);

export const Default = Template.bind({});
Default.args = {
  tab1Content: "This is the content of Tab 1.",
  tab2Content: "This is the content of Tab 2.",
  tab3Content: "This is the content of Tab 3.",
};
