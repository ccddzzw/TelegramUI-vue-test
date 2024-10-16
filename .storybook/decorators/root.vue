<template>
  <AppRoot :platform="globals.platform" :appearance="globals.theme">
    <slot></slot>
  </AppRoot>
</template>

<script setup lang="ts">
  import { AppRoot } from '../../src/index';
  import type { PropType } from 'vue';

  defineProps({
    globals: {
      type: Object as PropType<any>,
      required: true,
    },
  });
</script>