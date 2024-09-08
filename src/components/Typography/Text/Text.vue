<template>
  <component
    :is="component"
    :class="[styles.wrapper, className]"
    v-bind="$attrs"
  >
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import styles from './Text.module.css';

export default defineComponent({
  name: 'Text',
  inheritAttrs: false,
  props: {
    component: {
      type: String,
      default: 'span',
    },
    className: String,
  },
  setup() {
    return { styles };
  },
});
</script>