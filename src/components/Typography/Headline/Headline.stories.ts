import type { Meta, StoryObj } from '@storybook/vue3';
import { Headline } from './index';

const meta: Meta<typeof Headline> = {
  title: 'Typography/Headline',
  component: Headline,
  parameters: {
    docs: {
      description: {
        component: 'The Headline component serves as a wrapper for text that is intended to be displayed prominently,  typically used for section headings or important titles within the application. It leverages the Typography  component for consistent typographic styling, offering a range of customization options through its props.  The component defaults to an `<h5>` HTML tag, providing semantic meaning and ensuring good SEO practices,  but can be customized as needed.'
      }
    }
  },
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

