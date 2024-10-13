import type { Meta, StoryObj } from '@storybook/vue3';
import Spinner from './Spinner.vue';

const meta = {
  title: 'Feedback/Spinner',
  component: Spinner,
  parameters: {
    docs: {
      description: {
        component: 'Provides a visual indicator for loading states across different platforms. It automatically selects an appropriate spinner style based on the current platform, allowing for a consistent user experience.'
      }
    }
  },
  argTypes: {
    size: {
      control: false,
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => ({
    components: { Spinner },
    setup() {
      return { args };
    },
    template: `
      <div style="width: 400px; border: 1px dashed #9747FF; border-radius: 5px; padding: 20px;">
        <Spinner v-bind="args" size="s" /> <br />
        <Spinner v-bind="args" size="m" /> <br />
        <Spinner v-bind="args" size="l" /> <br />
      </div>
    `,
  }),
};