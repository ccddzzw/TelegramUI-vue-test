import type { Meta, StoryObj } from '@storybook/vue3';
import { Badge } from './index';

const meta: Meta<typeof Badge> = {
  title: 'Blocks/Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: 'The `Badge` component renders a small numeric or dot indicator, typically used for notifications, statuses, or counts. It supports several visual modes for different contexts (e.g., critical, primary) and can be sized normally or enlarged.'
      }
    }
  },
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