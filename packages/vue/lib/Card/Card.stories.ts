import type { Meta, StoryObj } from '@storybook/vue3';
import Card from './Card.vue';

const meta: Meta<typeof Card> = {
  title: 'Vue/Card',
  component: Card,
  argTypes: {
    rounded: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    rounded: 'md',
  },
  render: (args) => ({
    components: { Card },
    setup: () => ({ args }),
    template: `
      <Card v-bind="args">
        <template #content>
          Main content of the card goes here.
        </template>
      </Card>
    `,
  }),
};

export const WithHeader: Story = {
  args: {
    rounded: 'md',
  },
  render: (args) => ({
    components: { Card },
    setup: () => ({ args }),
    template: `
      <Card v-bind="args">
        <template #header>
          Card Header
        </template>
        <template #content>
          Main content of the card goes here.
        </template>
      </Card>
    `,
  }),
};

export const WithHeaderAndFooter: Story = {
  args: {
    rounded: 'md',
  },
  render: (args) => ({
    components: { Card },
    setup: () => ({ args }),
    template: `
      <Card v-bind="args">
        <template #header>
          Card Header
        </template>
        <template #content>
          Main content of the card goes here.
        </template>
        <template #footer>
          Card Footer
        </template>
      </Card>
    `,
  }),
};
