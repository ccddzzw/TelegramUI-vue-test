import type { Meta, StoryObj } from '@storybook/vue3';
import Button from './Button.vue';
import Icon20Copy from '../../../icons/20/copy.vue';
import Icon24PersonRemove from '../../../icons/24/person_remove.vue';
import { h } from 'vue';

const meta = {
  title: 'Blocks/Button',
  component: Button,
  argTypes: {
    size: {
      control: 'radio',
      options: ['s', 'm', 'l'],
    },
    mode: {
      control: 'select',
      options: ['filled', 'bezeled', 'plain', 'gray', 'outline', 'white'],
    },
    before: {
      control: false,
    },
    after: {
      control: false,
    },
    stretched: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    Component: {
      control: false,
    },
  },
  args: {
    size: 'm',
    mode: 'filled',
    stretched: false,
    loading: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Plain: Story = {
  args: {
    size: 's',
    mode: 'filled',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <Button v-bind="args">
        Action
      </Button>
    `,
  }),
};

export const WithIcon: Story = {
  args: {
    size: 's',
    mode: 'filled',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      const before = h(args.size === 's' ? Icon20Copy : Icon24PersonRemove);
      return { args, before };
    },
    template: `
      <Button
        :before="before"
        v-bind="args"
      >
        Create channel
      </Button>
    `,
  }),
};

export const Link: Story = {
  args: {
    size: 's',
    mode: 'filled',
    target: '_blank',
    href: 'https://nohello.net/en/',
    Component: 'a',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <Button v-bind="args">
        No hello
      </Button>
    `,
  }),
};
