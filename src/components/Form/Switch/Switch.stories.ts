import type { Meta, StoryObj } from '@storybook/vue3';
import { Switch } from './index';
import Placeholder from '../../Blocks/Placeholder/Placeholder.vue'

const meta = {
  title: 'Form/Switch',
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: 'A custom switch component that mimics the behavior of a checkbox input but with enhanced styling. It supports all the standard attributes of an HTML input element of type "checkbox". The appearance of the switch can be customized to match either a base or iOS platform style using CSS modules.'
      }
    }
  },
  argTypes:{
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

// export const WithCell: Story = {
//   render: (args) => ({
//     components: { Cell, Switch },
//     setup() {
//       return { args };
//     },
//     template: `
//       <Cell
//         component="label"
//         :description="'Pass component=\'label\' to Cell to make it clickable.'"
//         multiline
//       >
//         First radio
//         <template #after>
//           <Switch v-bind="args" defaultChecked />
//         </template>
//       </Cell>
//     `
//   }),
// };

