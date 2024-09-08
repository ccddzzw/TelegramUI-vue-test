import type { Preview } from '@storybook/vue3';
import { withAppRoot } from './decorators/withAppRoot';
import { withAppAppearance } from './decorators/withAppAppearance';

const preview: Preview = {
  parameters: {
    docs: {
      inlineStories: true,
      source: {
        state: 'open',
      },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: { disable: true },
    layout: 'centered',
  },
  globalTypes: {
    platform: {
      name: 'Platform',
      description: 'Platform for components',
      defaultValue: 'base',
      toolbar: {
        icon: 'mobile',
        items: ['base', 'ios'],
        title: 'Platform',
        dynamicTitle: true,
      },
    },
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
  decorators: [withAppRoot,withAppAppearance],
};

export default preview;