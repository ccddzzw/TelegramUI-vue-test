import type { Meta, StoryObj } from '@storybook/vue3';
import { Text } from './index';

const meta = {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    docs: {
      description: {
        component: 'Text component is designed for general-purpose text rendering, offering a wide range of typographic options. It extends the Typography component, inheriting its flexibility and styling capabilities. This component is ideal for paragraphs, labels, or any textual content, providing consistent styling across the application.'
      }
    }
  },
  argTypes: {
    caps: {
      control: {
        type: 'boolean',
      },
      // description: 'If true, transforms the text to uppercase for stylistic emphasis.'
    },
    weight: {
      control: 'radio',
      options: ['1', '2', '3'],
      // description: 'Controls the font weight of the text, with options ranging from light to bold.'
    },
    component: {
      control: false,
      // description: 'Specifies the HTML tag or React component used to render the text, defaulting to span.'
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