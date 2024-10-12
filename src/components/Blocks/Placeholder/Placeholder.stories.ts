import type { Meta, StoryObj } from '@storybook/vue3';
import styles from './Placeholder.stories.module.css';
import { Placeholder } from './index';
import Button from '../Button/Button.vue';
import { h } from 'vue';

const meta = {
  title: 'Blocks/Placeholder',
  component: Placeholder,
  parameters: {
    docs: {
      description: {
        component: 'A versatile component designed to display a placeholder with optional text, images, and actions.'
      }
    }
  },
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
    header: "Title",
    description: "Description",
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
    action: h(Button, { stretched: true, size: 'l' }, 'Action'),
  },
  render: (args) => ({
    components: { Placeholder, Button },
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

