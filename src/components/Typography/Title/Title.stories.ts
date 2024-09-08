import type { Meta, StoryObj } from '@storybook/vue3';
import Title from './Title.vue';

const meta = {
  title: 'Typography/Title',
  component: Title,
  argTypes: {
    level: {
      control: 'radio',
      options: ['1', '2', '3'],
    },
    weight: {
      control: 'radio',
      options: ['1','2','3'],
    },
    component:{
      control: false 
    }
  },
  args: {
    plain: true,
    level: '3',
    caps: false,
    weight: '1',
  },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => ({
    components: { Title },
    setup() {
      return { args };
    },
    template: `
      <div>
        <Title level="1" v-bind="args">Title · Level 1</Title>
        <br><br>
        <Title level="2" v-bind="args">Title · Level 2</Title>
        <br><br>
        <Title level="3" v-bind="args">Title · Level 3</Title>
      </div>
    `,
  }),
};