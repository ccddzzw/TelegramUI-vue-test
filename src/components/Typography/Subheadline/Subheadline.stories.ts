import type { Meta, StoryObj } from '@storybook/vue3';
import Subheadline from './Subheadline.vue';

const meta = {
  title: 'Typography/Subheadline',
  component: Subheadline,
  argTypes: {
    level: {
      control: 'radio',
      options: ['1', '2'],
    },
    plain: {
      control: 'boolean',
    },
    weight: {
      control: 'radio',
      options: ['1', '2', '3'],
    },
    component: {
      control: false
    }
  },
} satisfies Meta<typeof Subheadline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Subheadline1: Story = {
  args: {
    level: '1',
    plain: false,
  },
  render: (args) => ({
    components: { Subheadline },
    setup() {
      return { args };
    },
    template: `
      <div>
        <Subheadline weight="3" v-bind="args">
          Subheadline 1 · Regular
        </Subheadline>
        <Subheadline weight="2" v-bind="args">
          Subheadline 1 · Semibold
        </Subheadline>
        <Subheadline weight="1" v-bind="args">
          Subheadline 1 · Bold
        </Subheadline>
      </div>
    `,
  }),
};

export const Subheadline2: Story = {
  args: {
    level: '2',
    plain: false,
  },
  render: (args) => ({
    components: { Subheadline },
    setup() {
      return { args };
    },
    template: `
      <div>
        <Subheadline weight="3" v-bind="args">
          Subheadline 2 · Regular
        </Subheadline>
        <Subheadline weight="2" v-bind="args">
          Subheadline 2 · Semibold
        </Subheadline>
        <Subheadline weight="1" v-bind="args">
          Subheadline 2 · Bold
        </Subheadline>
      </div>
    `,
  }),
};