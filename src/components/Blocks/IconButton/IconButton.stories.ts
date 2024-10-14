import type { Meta, StoryObj } from '@storybook/vue3';
import { IconButton } from './index';
import Icon20QuestionMark from '../../../icons/20/question_mark.vue';
import Icon20QR from '../../../icons/24/qr.vue';
import Icon28Stats from '../../../icons/28/stats.vue';

const meta = {
  title: 'Blocks/IconButton',
  component: IconButton,
  parameters: {
    docs: {
      description: {
        component: 'Renders an icon button with customizable size and mode. It utilizes the `Tappable` component for enhanced touch interaction, allowing it to serve various UI actions efficiently.'
      }
    }
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['s', 'm', 'l'],
    },
    mode: {
      control: 'radio',
      options: ['bezeled', 'plain', 'gray', 'outline'],
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Playground: Story = {
  args: {
    size: 's',
    mode: 'bezeled',
  },
  render: (args) => ({
    components: { IconButton, Icon20QuestionMark, Icon20QR, Icon28Stats },
    setup() {
      return { args };
    },
    template: `
      <IconButton v-bind="args">
        <Icon20QuestionMark v-if="args.size === 's'" />
        <Icon20QR v-if="args.size === 'm'" />
        <Icon28Stats v-if="args.size === 'l'" />
      </IconButton>
    `,
  }),
} satisfies Story;