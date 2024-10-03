import type { Meta, StoryObj } from '@storybook/vue3';
import Headline from './Headline.vue';

const meta: Meta<typeof Headline> = {
  title: 'Typography/Headline',
  component: Headline,
  argTypes: {
    weight: {
      control: 'radio',
      options: ['1', '2', '3'],
    },
    component: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Headline>;

export const Playground: Story = {
  args: {
    plain: false,
  },
  render: (args) => ({
    components: { Headline },
    setup() {
      return { args };
    },
    template: `
      <div>
        <Headline weight="3" v-bind="args" >
          Headline · Regular
        </Headline>
        <Headline weight="2" v-bind="args">
          Headline · Semibold
        </Headline>
        <Headline weight="1" v-bind="args">
          Headline · Bold
        </Headline>
      </div>
    `,
  }),
};

