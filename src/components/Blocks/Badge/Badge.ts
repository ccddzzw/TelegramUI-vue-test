import type { AreaHTMLAttributes } from 'vue';

export interface BadgeProps extends /* @vue-ignore */ AreaHTMLAttributes {
    /**
     * The visual style of the badge: 'number' displays the content, 'dot' shows a simple dot.
     */
    type: 'number' | 'dot';
    /**
     * The color scheme of the badge, affecting its background and text color.
     */
    mode?: 'primary' | 'critical' | 'secondary' | 'gray' | 'white';
    /**
     * Increases the size of the badge. Applicable only when `type` is 'number'.
     */
    large?: boolean;
}