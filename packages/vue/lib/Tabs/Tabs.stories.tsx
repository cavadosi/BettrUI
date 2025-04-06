import { Meta, StoryObj } from "@storybook/vue3";
import Tabs from "./Tabs.vue";

const meta: Meta<typeof Tabs> = {
  title: "Vue/Tabs",
  component: Tabs,
  argTypes: {
    items: {
      control: "object",
      description: "Array of tab items with label and optional icon",
    },
    iconVariant: {
      control: "select",
      options: ["outline", "solid"]
    }
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

const render = (args: any) => ({
  components: { Tabs },
  setup() {
    return { args };
  },
  template: `
    <Tabs v-bind="args">
      <template #Home>
        <div class="p-4 dark:text-white rounded-md shadow ">
          <h2 class="text-lg font-semibold">Home Content</h2>
          <p>This is the content for the Home tab.</p>
        </div>
      </template>

      <template #Profile>
        <div class="p-4 dark:text-white rounded-md shadow">
          <h2 class="text-lg font-semibold">Profile Content</h2>
          <p>This is the content for the Profile tab.</p>
        </div>
      </template>

      <template #Settings>
        <div class="p-4 dark:text-white rounded-md shadow">
          <h2 class="text-lg font-semibold">Settings Content</h2>
          <p>This is the content for the Settings tab.</p>
        </div>
      </template>
    </Tabs>
  `,
});

export const Default: Story = {
  args: {
    items: [{ label: "Home" }, { label: "Profile" }, { label: "Settings" }],
  },
  render,
};

export const WithIcons: Story = {
  args: {
    items: [
      { label: "Home", icon: "Home" },
      { label: "Profile", icon: "User" },
      { label: "Settings", icon: "Cog" },
    ],
    iconVariant: "outline"
  },
  render,
};
