import { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Modal from './Modal.vue'
import Button from '../Button/Button.vue'

const meta: Meta<typeof Modal> = {
  title: 'Vue/Modal',
  component: Modal,
  argTypes: {
    className: { control: 'text' },
    title: { control: 'text' }
  }
}

export default meta

type Story = StoryObj<typeof Modal>

export const Default: Story = {
  args: {
    isOpen: false,
    className: 'rounded-md',
    title: 'Example Modal'
  },
  render: (args) => ({
    components: { Modal, Button },
    setup() {
      const isOpen = ref(args.isOpen)
      const handleOpen = () => (isOpen.value = true)
      const handleClose = () => (isOpen.value = false)

      return { args, isOpen, handleOpen, handleClose }
    },
    template: `
      <div>
        <Button @click="handleOpen">Open Modal</Button>
        <Modal v-bind="args" :isOpen="isOpen" @close="handleClose">
          <template #body>
            <p >Content</p>
          </template>
          
          <template #footer>
            <Button @click="handleClose" class="w-full">Close</Button>
          </template>
        </Modal>
      </div>
    `
  })
}