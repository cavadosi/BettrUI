import { Meta, StoryObj } from '@storybook/vue3'
import Dropdown from './Dropdown.vue'

const meta: Meta<typeof Dropdown> = {
  title: 'Vue/Dropdown',
  component: Dropdown,
  argTypes: {
    label: { control: 'text' },
    sections: { control: 'object' },
    icon: { control: 'text' },
    headerTitle: { control: 'text' },
    headerDescription: { control: 'text' },
    buttonVariant: {
      control: {
        type: 'radio',
        options: ['solid', 'link', 'outline', 'soft', 'ghost', 'secondary'],
      },
    },
    buttonSize: {
      control: {
        type: 'radio',
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
      },
    },
    buttonRounded: {
      control: {
        type: 'radio',
        options: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
      },
    },
    placement: {
      control: {
        type: 'radio',
        options: ['top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'right-start'],
      },
    },
    offset: { control: 'number' },
  },
}

export default meta

type Story = StoryObj<typeof Dropdown>

export const Default: Story = {
  args: {
    label: 'Options',
    sections: [
      {
        items: [
          { id: 1, label: 'Profile', onClick: () => alert('Profile clicked') },
          { id: 2, label: 'Settings', onClick: () => alert('Settings clicked') },
          { id: 3, label: 'Logout', onClick: () => alert('Logout clicked') },
        ],
      },
    ],
    buttonVariant: 'secondary',
    buttonSize: 'sm',
    buttonRounded: 'md',
  },
}

export const WithIcons: Story = {
  args: {
    label: 'Actions',
    icon: 'CheckBadge',
    sections: [
      {
        items: [
          {
            id: 1,
            label: 'Profile',
            icon: 'User',
            onClick: () => alert('Profile clicked'),
          },
          {
            id: 2,
            label: 'Settings',
            icon: 'Cog',
            onClick: () => alert('Settings clicked'),
          },
          {
            id: 3,
            label: 'Logout',
            icon: 'Logout',
            onClick: () => alert('Logout clicked'),
          },
        ],
      },
    ],
    buttonVariant: 'outline',
    buttonSize: 'md',
    buttonRounded: 'lg',
  },
}

export const MultiSection: Story = {
  args: {
    label: 'More Options',
    headerTitle: 'Settings',
    headerDescription: 'Manage your preferences',
    sections: [
      {
        items: [
          {
            id: 1,
            label: 'Account',
            icon: 'User',
            onClick: () => alert('Account clicked'),
          },
          {
            id: 2,
            label: 'Preferences',
            icon: 'Cog',
            onClick: () => alert('Preferences clicked'),
          },
        ],
      },
      {
        items: [
          {
            id: 3,
            label: 'Logout',
            icon: 'Logout',
            onClick: () => alert('Logout clicked'),
          },
        ],
      },
    ],
    buttonVariant: 'solid',
    buttonSize: 'lg',
    buttonRounded: 'xl',
  },
}

export const WithOffset: Story = {
  args: {
    label: 'Options',
    sections: [
      {
        items: [
          { id: 1, label: 'Profile', onClick: () => alert('Profile clicked') },
          { id: 2, label: 'Settings', onClick: () => alert('Settings clicked') },
          { id: 3, label: 'Logout', onClick: () => alert('Logout clicked') },
        ],
      },
    ],
    placement: 'right-start',
    offset: 10,
    class: 'px-20 pt-10',
    buttonVariant: 'soft',
    buttonSize: 'xs',
    buttonRounded: 'none',
  },
}