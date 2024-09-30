import type { Meta, StoryObj } from '@storybook/vue3';
import Image from './Image.vue';
import { h } from 'vue';
import Icon12Quote from '../../../icons/20/quote.vue';
import Icon28Stats from '../../../icons/28/stats.vue';
import ImageBadge from './components/ImageBadge/ImageBadge.vue';


// Define the meta object for the Image component
const meta: Meta<typeof Image> = {
  title: 'Blocks/Image',
  component: Image,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [20, 24, 28, 40, 48, 96],
    },
    src: { control: 'text' },
    fallbackIcon: { control: 'text' },
  }
};

export default meta;
type Story = StoryObj<typeof Image>;

export const ValidImage: Story = {
  args: {
    size: 96,
    src: 'https://avatars.githubusercontent.com/u/84640980?v=4',
  },
  render: (args) => ({
    components: { Image },
    setup() {
      return { args };
    },
    template: `
      <Image v-bind="args" />
    `,
  }),
};

export const InvalidImage: Story = {
  args: {
    size: 96,
    src: 'https://avatars.gitontent.com/u/84640980?v=4',
  },
  render: (args) => ({
    components: { Image },
    setup() {
      return { args };
    },
    template: `
      <Image v-bind="args" />
    `,
  }),
};

export const WithFallback: Story = {
  args: {
    size: 96,
    src: 'https://avatars.gitontent.com/u/84640980?v=4',
    fallbackIcon: h('span', '😕'),
  },
  render: (args) => ({
    components: { Image },
    setup() {
      return { args };
    },
    template: `
      <Image v-bind="args">
      </Image>
    `,
  }),
};

export const WithBadge: Story = {
  args: {
    size: 48,
    src: 'https://avatars.githubusercontent.com/u/84640980?v=4',
    fallbackIcon: h('span', '😕'),
  },
  render: (args) => ({
    components: { Image, ImageBadge },
    setup() {
      return { args };
    },
    template: `
      <Image v-bind="args">
        <template #default>
          <ImageBadge type="number">42</ImageBadge>
        </template>
      </Image>
    `,
  }),
};

export const WithChildren: Story = {
  args: {
    size: 48,
  },
  render: (args) => ({
    components: { Image, Icon12Quote, Icon28Stats },
    setup() {
      return { args };
    },
    template: `
      <Image v-bind="args">
        <component :is="args.size <= 28 ? Icon12Quote : Icon28Stats" />
      </Image>
    `,
  }),
};
