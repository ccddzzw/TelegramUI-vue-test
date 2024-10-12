import type { Meta, StoryObj } from '@storybook/vue3';
import { LargeTitle } from './index';
import styles from './LargeTitle.stories.module.css';


const meta: Meta<typeof LargeTitle> = {
  title: 'Typography/LargeTitle',
  component: LargeTitle,
  parameters: {
    docs: {
      description: {
        component: 'The LargeTitle component is designed for prominent display text, typically used for major headings or titles within an application. It encapsulates the Typography component\'s features, offering extensive styling and semantic customization options while defaulting to an `<h1>` HTML element. This choice of default component underscores the importance and hierarchy of the text it encapsulates, making it suitable for primary page titles or significant headings.'
      }
    }
  },
  argTypes: {
    weight: {
      control: 'radio',
      options: ['3', '2', '1'],
    },
    component: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof LargeTitle>;

export const Playground: Story = {
  args: {
    plain: false,
  },
  render: (args) => ({
    components: { LargeTitle },
    setup() {
      return { args, styles };
    },
    template: `
      <div>
        <LargeTitle weight="3" v-bind="args" :class="styles.color">
          Large Title · Regular
        </LargeTitle>
        <LargeTitle weight="2" v-bind="args">
          Large Title · Semibold
        </LargeTitle>
        <LargeTitle weight="1" v-bind="args">
          Large Title · Bold
        </LargeTitle>
      </div>
    `,
  }),
};

