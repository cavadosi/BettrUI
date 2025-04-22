import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Select from './Select.vue'

const people = [
  { id: 1, value: "Wade Cooper" },
  { id: 2, value: "Arlene Mccoy" },
  { id: 3, value: "Devon Webb" },
  { id: 4, value: "Tom Cook" },
  { id: 5, value: "Tanya Fox" },
  { id: 6, value: "Hellen Schmidt" },
  { id: 7, value: "Caroline Schultz" },
  { id: 8, value: "Mason Heaney" },
  { id: 9, value: "Claudie Smitham" },
  { id: 10, value: "Emil Schaefer" },
]

const meta: Meta<typeof Select> = {
  title: "Vue/Select",
  component: Select,
  argTypes: {
    label: { control: "text" },
    items: { control: "object" },
    icon: { 
      control: "text",
      description: "Icon name from Heroicons (without 'Icon' suffix)"
    },
    selectedIcon: { 
      control: "text",
      description: "Icon name from Heroicons (without 'Icon' suffix)" 
    },
  },
  args: {
    items: people,
    modelValue: people[0],
  },
}

export default meta

type Story = StoryObj<typeof Select>

export const Default: Story = {
  render: (args) => ({
    components: { Select },
    setup() {
      const selected = ref(args.modelValue)
      return { args, selected }
    },
    template: `
      <Select
        v-bind="args"
        v-model="selected"
        :items="args.items"
      />
    `,
  })
}

export const CustomLabel: Story = {
  args: {
    label: "Select a user",
    modelValue: people[0],
  },
  render: (args) => ({
    components: { Select },
    setup() {
      const selected = ref(args.modelValue)
      return { args, selected }
    },
    template: `
      <Select
        v-bind="args"
        v-model="selected"
        :items="args.items"
      />
    `,
  })
}

export const CustomIcons: Story = {
  args: {
    label: "Select a user",
    icon: "ChevronDown",
    selectedIcon: "CheckBadge",
    modelValue: people[0],
  },
  render: (args) => ({
    components: { Select },
    setup() {
      const selected = ref(args.modelValue)
      return { args, selected }
    },
    template: `
      <Select
        v-bind="args"
        v-model="selected"
        :items="args.items"
      />
    `,
  })
}