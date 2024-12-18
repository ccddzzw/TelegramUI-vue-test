import type { Meta, StoryObj } from '@storybook/vue3';
import { Image, ImageBadge } from './index';
import { h } from 'vue';
import Icon12Quote from '../../../icons/20/quote.vue';
import Icon28Stats from '../../../icons/28/stats.vue';


const meta: Meta<typeof Image> = {
  title: 'Blocks/Image',
  component: Image,
  parameters: {
    docs: {
      description: {
        component: 'Renders an image with optional fallback content. It supports custom sizing and will automatically handle loading states and errors by optionally displaying a fallback icon. This component can also include additional content, such as badges or overlays, as children.'
      }
    }
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [20, 24, 28, 40, 48, 96],
    },
    src: { control: 'text' },
    fallbackIcon: { control: false },
    alt: {
      table: {
        disable: true,
      },
    },
    crossorigin: {
      table: {
        disable: true,
      },
    },
    decoding: {
      table: {
        disable: true,
      },
    },
    loading: {
      table: {
        disable: true,
      },
    },
    referrerpolicy: {
      table: {
        disable: true,
      },
    },
    sizes: {
      table: {
        disable: true,
      },
    },
    srcset: {
      table: {
        disable: true,
      },
    },
    usemap: {
      table: {
        disable: true,
      },
    },
  },
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
        <ImageBadge type="number">42</ImageBadge>
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
      return { 
        args,
        getIcon: () => args.size && args.size <= 28 ? h(Icon12Quote) : h(Icon28Stats)
      };
    },
    template: `
      <Image v-bind="args">
        <component :is="getIcon()" />
      </Image>
    `,
  }),
};
