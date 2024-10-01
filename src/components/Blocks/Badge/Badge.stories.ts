import type { Meta, StoryObj } from '@storybook/vue3';
import Badge from './Badge.vue';

const meta: Meta<typeof Badge> = {
  title: 'Blocks/Badge',
  component: Badge,
  argTypes: {
    type: {
      control: 'radio',
      options: ['number', 'dot'],
    },
    mode: {
      control: 'radio',
      options: ['primary', 'critical', 'secondary', 'gray', 'white'],
    },
  },
  args: {
    type: 'dot',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Dot: Story = {
  args: {
    type: 'dot',
    mode: 'primary',
  },
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args };
    },
    template: '<Badge v-bind="args" />',
  }), 
};

export const Number: Story = {
  args: {
    mode: 'primary',
    type: 'number',
  },
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args };
    },
    template: '<Badge v-bind="args">50</Badge>',
  }),
};