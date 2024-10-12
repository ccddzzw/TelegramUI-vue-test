import type { Meta, StoryObj } from '@storybook/vue3';
import { Caption } from './index';

const meta = {
  title: 'Typography/Caption',
  component: Caption,
  parameters: {
    docs: {
      description: {
        component: 'The Caption component is a text wrapper that applies specific typographic styles, based on the provided `level` prop. It\'s built on top of the Typography component, ensuring consistent text styling across the application. It primarily serves for text that acts as a small, descriptive label or annotation.'
      }
    }
  },
  argTypes: {
    level: {
      control: 'radio',
      options: ['1', '2'],
    },
    component: {
      control: false
    },
    weight: {
      control: 'radio',
      options: ['1', '2', '3'],
    },
    caps: {
      control: 'boolean',
    },
  },
  args: {
    level: '1',
  },
} satisfies Meta<typeof Caption>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => ({
    components: { Caption },
    setup() {
      return { args };
    },
    template: `
      <div>
        <Caption weight="3" v-bind="args">Caption 1 · Regular</Caption>
        <br><br>
        <Caption weight="2" v-bind="args">Caption 1 · Semibold</Caption>
        <br><br>
        <Caption weight="1" v-bind="args">Caption 1 · Bold</Caption>
      </div>
    `,
  }),
};


export const Caption2: Story = {
  args: {
    level: '2',
  },
  render: (args) => ({
    components: { Caption },
    setup() {
      return { args };
    },
    template: `
      <div>
        <Caption weight="3" v-bind="args">Caption 2 · Regular</Caption>
        <br><br>
        <Caption weight="2" v-bind="args">Caption 2 · Semibold</Caption>
        <br><br>
        <Caption weight="1" v-bind="args">Caption 2 · Bold</Caption>
      </div>
    `,
  }),
};

