<template>
  <component
    :is="component"
    :class="[
      styles.wrapper,
      plain && styles['wrapper--plain'],
      weight && stylesWeight[weight],
      caps && styles['wrapper--caps'],
      className
    ]"
    v-bind="$attrs"
  >
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import styles from './Typography.module.css';

const stylesWeight = {
  '1': styles['wrapper--weight-1'],
  '2': styles['wrapper--weight-2'],
  '3': styles['wrapper--weight-3'],
};

export default defineComponent({
  name: 'Typography',
  inheritAttrs: false,
  props: {
    weight: {
      type: String as PropType<'1' | '2' | '3'>,
      default: '3',
    },
    component: {
      type: String,
      default: 'span',
    },
    plain: {
      type: Boolean,
      default: true,
    },
    caps: Boolean,
    className: String,
  },
  setup(props) {
    const stylesWeight = computed(() => ({
      '1': styles['wrapper--weight-1'],
      '2': styles['wrapper--weight-2'],
      '3': styles['wrapper--weight-3'],
    }));

    return {
      styles,
      stylesWeight,
    };
  },
});
</script>