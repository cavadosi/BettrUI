<script setup lang="ts">
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/vue'
import { defineProps, defineEmits } from 'vue'
import Icon from '../Icon/Icon.vue'

interface Props {
  isOpen: boolean
  title?: string
  className?: string
}

const props = defineProps<Props>()
const emit = defineEmits(['close'])

const emitClose = () => {
  emit('close')
}
</script>
<template>
    <Dialog :open="isOpen" @close="emitClose" class="relative z-10">
      <DialogBackdrop class="fixed inset-0 bg-secondary-700/75 transition-opacity dark:bg-secondary-950/75" />
      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <DialogPanel
            :class="['relative bg-white divide-y divide-secondary-200 flex flex-col focus:outline-none sm:my-8 sm:w-full sm:max-w-lg dark:bg-secondary-900 dark:divide-secondary-700', className]"
          >
            <!-- Header Slot -->
            <div v-if="$slots.header || title" class="flex items-center justify-between p-4 sm:px-6 min-h-16 min-w-[300px]">
              <h3 class="text-lg font-semibold text-secondary-900 dark:text-secondary-100">
                <slot name="header">{{ title }}</slot>
              </h3>
              <button
                @click="emitClose"
                class="absolute right-4 top-4 text-secondary-500 hover:text-secondary-700 dark:text-secondary-400 dark:hover:text-secondary-300"
              >
                <Icon name="XMark" class="size-5" />
              </button>
            </div>
  
            <!-- Body Slot -->
            <div v-if="$slots.body" class="flex-1 overflow-y-auto p-4 sm:p-6 min-w-[300px] text-secondary-900 dark:text-secondary-100">
              <slot name="body" />
            </div>
  
            <!-- Footer Slot -->
            <div v-if="$slots.footer" class="flex items-center gap-1.5 p-4 sm:px-6 min-w-[300px]">
              <slot name="footer" />
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
</template>