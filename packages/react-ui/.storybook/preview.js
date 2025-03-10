import "../../../styles/index.css"

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: 'Dark', value: '#101828' },
        { name: 'Light', value: '#F7F9F2' },
      ],
      default: 'Light',
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