import type { Meta, StoryObj } from '@storybook/vue3';
import { CircularProgress } from './index';

const meta = {
  title: 'Feedback/CircularProgress',
  component: CircularProgress,
  parameters: {
    docs: {
      description: {
        component: 'Renders a circular progress indicator, useful for displaying loading states or progress metrics. The component dynamically adjusts its size and stroke based on the provided `size` prop and visually represents the `progress` prop as a percentage of the circle\'s circumference.'
      }
    }
  },
  argTypes: {
    size: {
      control: 'radio' ,
      options: ['small', 'medium', 'large'],
    },
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
} satisfies Meta<typeof CircularProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'medium',
    progress: 50,
  },
};