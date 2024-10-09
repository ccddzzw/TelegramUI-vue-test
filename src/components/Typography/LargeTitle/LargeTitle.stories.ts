import type { Meta, StoryObj } from '@storybook/vue3';
import LargeTitle from './LargeTitle.vue';
import styles from './LargeTitle.stories.module.css';


const meta: Meta<typeof LargeTitle> = {
  title: 'Typography/LargeTitle',
  component: LargeTitle,
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

