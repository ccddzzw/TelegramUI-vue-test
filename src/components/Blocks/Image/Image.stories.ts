import type { Meta, StoryObj } from '@storybook/vue3';
import Image from './Image.vue';
import { h } from 'vue';

// Define the meta object for the Image component
const meta: Meta<typeof Image> = {
  title: 'Blocks/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [20, 24, 28, 40, 48, 96],
    },
    src: { control: 'text' },
    alt: { control: 'text' },
    fallbackIcon: { control: 'text' },
  },
};

export default meta;

// Define the Story type
type Story = StoryObj<typeof Image>;

// Default story
export const Default: Story = {
  args: {
    src: 'https://placekitten.com/200/200',
    alt: 'A cute kitten',
    size: 40,
  },
};

// Story with different sizes
export const DifferentSizes: Story = {
  render: (args) => ({
    components: { Image },
    setup() {
      return { args };
    },
    template: `
      <div>
        <Image v-bind="args" :size="20" style="margin-right: 10px;" />
        <Image v-bind="args" :size="24" style="margin-right: 10px;" />
        <Image v-bind="args" :size="28" style="margin-right: 10px;" />
        <Image v-bind="args" :size="40" style="margin-right: 10px;" />
        <Image v-bind="args" :size="48" style="margin-right: 10px;" />
        <Image v-bind="args" :size="96" />
      </div>
    `,
  }),
  args: {
    src: 'https://placekitten.com/200/200',
    alt: 'A cute kitten',
  },
};

// Story with fallback icon
export const WithFallbackIcon: Story = {
  args: {
    size: 40,
    fallbackIcon: h('span', { innerHTML: '🖼️' }),
  },
};

// Story with error (to show fallback icon)
export const WithError: Story = {
  args: {
    src: 'https://invalid-image-url.com/image.jpg',
    alt: 'Invalid image',
    size: 40,
    fallbackIcon: h('span', { innerHTML: '🖼️' }),
  },
};