import AppRootDecorator from './root.vue';
import AppearanceDecorator from './appearance.vue';
import { h } from 'vue';
import { Decorator } from '@storybook/vue3';
import { AppRoot } from '../../src/index';

export const withAppRoot: Decorator = (Story, context) => {

  return {
    components: { Story, AppRootDecorator, AppearanceDecorator, AppRoot },
    render() {
      return h(AppRoot, {
        platform: context.globals.platform,
        appearance: context.globals.theme,
      }, () => h(Story()));
    },
  };
};