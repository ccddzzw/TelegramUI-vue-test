import type { Meta, StoryObj } from '@storybook/vue3';
import Placeholder from './Placeholder.vue';
import styles from './Placeholder.stories.module.css';
import { h } from 'vue';
import Button from '../Button/Button.vue';

const meta = {
  title: 'Blocks/Placeholder',
  component: Placeholder,
  argTypes: {
    header: { control: 'text' },
    description: { control: 'text' },
    action: { control: false },
  },
} satisfies Meta<typeof Placeholder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    args: {
      header: h('p', 'Title'),
      description: h('p', 'Description'),
    },
    render: (args) => ({
      components: { Placeholder },
      setup() {
        return { args, styles };
      },
      template: `
        <div :class="styles.placeholderWrapper">
          <Placeholder v-bind="args">
            <img
              alt="Telegram sticker"
              src="https://xelene.me/telegram.gif"
              :class="styles.sticker"
            />
          </Placeholder>
        </div>
      `,
    }),
};


export const WithAction: Story = {
  args: {
    header: 'Title',
    description: 'Description',
    action: 'Click me',
  },
  render: (args) => ({
    components: { Placeholder, Button },
    setup() {
      return { args };
    },
    template: `
      <Placeholder v-bind="args">
        <template #action>
          <Button stretched size="l">
            Action
          </Button>
        </template>
      </Placeholder>
    `,
  }),
};


export const HeaderAndDescription: Story = {
  args: {
    description: 'Only you can see archived stories unless you choose to post them to your profile.',
  },
  render: (args) => ({
    components: { Placeholder },
    setup() {
      return { args, styles };
    },
    template: `
      <Placeholder v-bind="args">
        <img
          alt="Telegram sticker"
          src="https://xelene.me/telegram.gif"
          :class="styles.sticker"
        />
      </Placeholder>
    `,
  }),
};

