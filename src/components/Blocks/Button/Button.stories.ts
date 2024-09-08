import type { Meta, StoryObj } from '@storybook/vue3';
import Button from './Button.vue';

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
    type: {
      control: 'text',
    },
    before: {
      control: 'text',
    },
    after: {
      control: 'text',
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
    type: 'button',
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
    children: 'Action',
  },
};

export const WithIcon: Story = {
  args: {
    size: 's',
    mode: 'filled',
    children: 'Create channel',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <Button
        :before="args.size === 's' ? Icon20Copy : Icon24PersonRemove"
        v-bind="args"
      />
    `,
  }),
};

export const Link: Story = {
  args: {
    size: 's',
    mode: 'filled',
    children: 'No hello',
    // target: '_blank',
    // href: 'https://nohello.net/en/',
    Component: 'a',
  },
};
