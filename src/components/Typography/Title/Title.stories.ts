import type { Meta, StoryObj } from '@storybook/vue3';
import Title from './Title.vue';

const meta = {
  title: 'Typography/Title',
  component: Title,
  parameters: {
    docs: {
      description: {
        component: 'Text component is designed for general-purpose text rendering,offering a wide range of typographic options. It extends the Typographycomponent, inheriting its flexibility and styling capabilities.This component is ideal for paragraphs, labels, or any textual content, providingconsistent styling across the application.'
      }
    }
  },
  argTypes: {
    level: {
      control: 'radio',
      options: ['1', '2', '3'],
    },
    weight: {
      control: 'radio',
      options: ['1', '2', '3'],
    },
    component: {
      control: false
    }
  },
  args: {
    plain: true,
    level: '1',
  },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Title1: Story = {
  args: {
    level: '1',
    plain: false,
  },
  render: (args) => ({
    components: { Title },
    setup() {
      return { args };
    },
    template: `
      <div>
        <Title weight="3" v-bind="args">
          Title 1 · Regular
        </Title>
        <Title weight="2" v-bind="args">
          Title 1 · Semibold
        </Title>
        <Title weight="1" v-bind="args">
          Title 1 · Bold
        </Title>
      </div>
    `,
  }),
};

export const Title2: Story = {
  args: {
    level: '2',
    plain: false,
  },
  render: (args) => ({
    components: { Title },
    setup() {
      return { args };
    },
    template: `
      <div>
        <Title weight="3" v-bind="args">
          Title 2 · Regular
        </Title>
        <Title weight="2" v-bind="args">
          Title 2 · Semibold
        </Title>
        <Title weight="1" v-bind="args">
          Title 2 · Bold
        </Title>
      </div>
    `,
  }),
};


export const Title3: Story = {
  args: {
    level: '3',
    plain: false,
  },
  render: (args) => ({
    components: { Title },
    setup() {
      return { args };
    },
    template: `
      <div>
        <Title weight="3" v-bind="args">
          Title 3 · Regular
        </Title>
        <Title weight="2" v-bind="args">
          Title 3 · Semibold
        </Title>
        <Title weight="1" v-bind="args">
          Title 3 · Bold
        </Title>
      </div>
    `,
  }),
};