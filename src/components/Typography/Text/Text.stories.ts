import type { Meta, StoryObj } from '@storybook/vue3';
import Text from './Text.vue';

const meta = {
  title: 'Typography/Text',
  component: Text,
  argTypes: {
    caps: {
      control: {
        type: 'boolean',
      },
    },
    weight:{
      control: 'radio',
      options: ['1', '2', '3'],
    },
    component: {
      control: false,
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => ({
    components: { Text },
    setup() {
      return { args };
    },
    template: `
      <div>
        <Text weight="3" v-bind="args">Text · Regular</Text>
        <br><br>
        <Text weight="2" v-bind="args">Text · Semibold</Text>
        <br><br>
        <Text weight="1" v-bind="args">Text · Bold</Text>
      </div>
    `,
  }),
};