import type { Meta, StoryObj } from '@storybook/vue3';
import CircularProgress from './CircularProgress.vue';

const meta = {
  title: 'Feedback/CircularProgress',
  component: CircularProgress,
  tags: ['autodocs'],
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