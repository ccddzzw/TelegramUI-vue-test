import type { Meta, StoryObj } from '@storybook/vue3';
import Caption from './Caption.vue';

const meta = {
  title: 'Typography/Caption',
  component: Caption,
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