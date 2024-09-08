<template>
  <AppRoot :platform="globals.platform" :appearance="globals.theme">
    <slot></slot>
  </AppRoot>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { AppRoot } from '../../src/index';

export default defineComponent({
  name: 'AppRootDecorator',
  components: {
    AppRoot,
  },
  props: {
    globals: {
      type: Object as PropType<any>,
      required: true,
    },
  },
});
</script>