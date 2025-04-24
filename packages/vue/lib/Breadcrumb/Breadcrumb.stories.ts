import type { Meta, StoryObj } from '@storybook/vue3';
import Breadcrumb from './Breadcrumb.vue';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Vue/Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    size: 'md',
    pages: [
      { icon: 'Home', href: '#', current: false },
      { name: 'Projects', href: '#', current: false },
      { name: 'Project Nero', href: '#', current: true },
    ],
  },
};

export const WithDifferentIcon: Story = {
  args: {
    icon: 'ArrowRight',
    size: 'md',
    pages: [
      { icon: 'Home', name: 'Dashboard', href: '#', current: false },
      { name: 'Settings', href: '#', current: true },
    ],
  },
};

export const WithCustomLink: Story = {
  render: (args) => ({
    components: { Breadcrumb },
    setup() {
      return { args };
    },
    template: `
      <Breadcrumb v-bind="args">
        <template #link="{ page }">
          <a
            :href="page.href"
            :aria-current="page.current ? 'page' : undefined"
            class="ml-4 text-blue-500 hover:underline hover:text-blue-500 flex items-center gap-2"
          >
            {{ page.name }}
          </a>
        </template>
      </Breadcrumb>
    `,
  }),
  args: {
    size: 'md',
    pages: [
      { name: 'Home', href: '#', current: false },
      { name: 'Profile', href: '#', current: false },
      { name: 'Account', href: '#', current: true },
    ],
  },
};
