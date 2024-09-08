import AppearanceDecorator from './appearance.vue';
import { h } from 'vue';
import { Decorator } from '@storybook/vue3';

export const withAppAppearance: Decorator = (Story, context) => {
  return {
    components: { Story, AppearanceDecorator},
    render() {
      return h(AppearanceDecorator, {
        appearance: context.globals.theme,
      }, () => h(Story()));
    },
  };
};