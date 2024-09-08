import type { Meta, StoryObj } from '@storybook/vue3';
import Typography from './Typography.vue';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    weight: {
      control: { type: 'select' },
      options: ['1', '2', '3'],
    },
    component: {
      control: { type: 'select' },
      options: ['span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    plain: {
      control: 'boolean',
    },
    caps: {
      control: 'boolean',
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    weight: '3',
    component: 'span',
    plain: true,
    caps: false,
    default: 'Default Typography',
  },
};

export const Heading: Story = {
  args: {
    weight: '1',
    component: 'h1',
    plain: false,
    caps: false,
    default: 'Heading Typography',
  },
};

export const Paragraph: Story = {
  args: {
    weight: '2',
    component: 'p',
    plain: false,
    caps: false,
    default: 'Paragraph Typography',
  },
};

export const AllCaps: Story = {
  args: {
    weight: '3',
    component: 'span',
    plain: false,
    caps: true,
    default: 'All Caps Typography',
  },
};