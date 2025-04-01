import type { Preview } from '@storybook/react'

import '../lib/tailwind.css'

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: 'Dark', value: '#101828' },
        { name: 'Light', value: '#F7F9F2' },
      ],
      default: 'Dark',
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;