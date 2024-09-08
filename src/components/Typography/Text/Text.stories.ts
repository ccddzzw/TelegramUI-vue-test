import type { Meta, StoryObj } from '@storybook/vue3';
import Text from './Text.vue';

const meta: Meta<typeof Text> = {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    component: {
      control: { type: 'select' },
      options: ['span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    component: 'span',
    default: 'Default Text',
  },
};

export const Paragraph: Story = {
  args: {
    component: 'p',
    default: 'This is a paragraph of text. It can contain multiple sentences and is typically used for body content.',
  },
};

export const Heading1: Story = {
  args: {
    component: 'h1',
    default: 'Heading 1',
  },
};

export const Heading2: Story = {
  args: {
    component: 'h2',
    default: 'Heading 2',
  },
};

export const CustomClass: Story = {
  args: {
    component: 'span',
    className: 'custom-text-class',
    default: 'Text with custom class',
  },
};