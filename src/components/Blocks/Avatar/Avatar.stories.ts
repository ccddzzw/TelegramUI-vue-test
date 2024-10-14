import type { Meta, StoryObj } from '@storybook/vue3';
import { Avatar, AvatarBadge } from './index';
import { h } from 'vue';
import Icon12Quote from '../../../icons/20/quote.vue';
import Icon28Stats from '../../../icons/28/stats.vue';


const meta: Meta<typeof Avatar> = {
    title: 'Blocks/Avatar',
    component: Avatar,
    parameters: {
        docs: {
            description: {
                component: 'Renders an image with specific styles for an avatar presentation, including optional acronym display and badge support. Utilizes the `Image` component for core functionality, enhancing it with avatar-specific features like acronyms and badges.'
            }
        }
    },
    argTypes: {
        src: { control: 'text' },
        alt: { control: 'text' },
        size: { control: { type: 'number', min: 16, max: 256, step: 8 } },
        acronym: { control: 'text' },
        fallbackIcon: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const ValidImage: Story = {
    args: {
        size: 96,
        src: 'https://avatars.githubusercontent.com/u/84640980?v=4',
    },
    render: (args) => ({
        components: { Avatar },
        setup() {
            return { args };
        },
        template: '<Avatar v-bind="args" />',
    }),
};

export const InvalidImage: Story = {
    args: {
        size: 96,
        src: 'https://avatars.gitontent.com/u/84640980?v=4',
    },
    render: (args) => ({
        components: { Avatar },
        setup() {
            return { args };
        },
        template: '<Avatar v-bind="args" />',
    }),
};


export const WithFallback: Story = {
    args: {
        size: 96,
        src: 'https://avatars.gitontent.com/u/84640980?v=4',
        fallbackIcon: h('span', '😕'),
    },
    render: (args) => ({
        components: { Avatar },
        setup() {
            return { args };
        },
        template: '<Avatar v-bind="args" />',
    }),
};

export const WithBadge: Story = {
    args: {
        size: 48,
        src: 'https://avatars.githubusercontent.com/u/84640980?v=4',
    },
    render: (args) => ({
        components: { Avatar, AvatarBadge },
        setup() {
            return { args };
        },
        template: `
            <Avatar v-bind="args">
                <AvatarBadge type="number" large>42</AvatarBadge>
            </Avatar>
        `,
    }),
};

export const WithAcronym: Story = {
    args: {
        size: 96,
        acronym: 'IS',
    },
    render: (args) => ({
        components: { Avatar },
        setup() {
            return { args };
        },
        template: '<Avatar v-bind="args" />',
    }),
};

export const WithChildren: Story = {
    args: {
        size: 48,
    },
    render: (args) => ({
        components: { Avatar, Icon12Quote, Icon28Stats },
        setup() {
            return {
                args,
                getIcon: () => args.size && args.size <= 28 ? h(Icon12Quote) : h(Icon28Stats)
            };
        },
        template: `
            <Avatar v-bind="args">
                <component :is="getIcon()" />
            </Avatar>
        `,
    }),
};

