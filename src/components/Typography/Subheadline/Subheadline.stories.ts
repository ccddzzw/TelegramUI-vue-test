import type { Meta, StoryObj } from '@storybook/vue3';
import { Subheadline } from './index';

const meta = {
  title: 'Typography/Subheadline',
  component: Subheadline,
  parameters: {
    docs: {
      description: {
        component: 'The Subheadline component is designed to render text that serves as a secondary heading or subheading within content. It leverages the Typography component for consistent text styling, offering additional control over the text\'s size through the `level` prop. By default, it renders as an `<h6>` element but can be customized with the `Component` prop.'
      }
    }
  },
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