import type { Meta, StoryObj } from '@storybook/vue3';
import Switch from './Switch.vue';
import Placeholder from '../../Blocks/Placeholder/Placeholder.vue'

const meta = {
  title: 'Form/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes:{
    className:{
      control: false
    }
  }
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  render: (args) => ({
    components: { Switch, Placeholder },
    setup() {
      return { args };
    },
    template: `
      <Placeholder description="This component wraps input with type=checkbox, see usage example on the With Cell page">
        <div style="display: flex; gap: 6px;">
          <Switch v-bind="args" />
          <br />
          <Switch v-bind="args" />
          <br />
          <Switch v-bind="args" :disabled="true" />
          <br />
          <Switch v-bind="args" :disabled="true" :checked="true" />
        </div>
      </Placeholder>
    `
  })
};