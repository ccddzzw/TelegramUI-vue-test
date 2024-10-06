<template>
  <component
    :is="component"
    :class="[
      styles.wrapper,
      { 
        [styles['wrapper--plain']]: plain,
        [stylesWeight[weight]]: weight,
        [styles['wrapper--caps']]: caps
      }
    ]"
    v-bind="$attrs"
  >
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
import styles from './Typography.module.css';
import { TypographyProps } from './Typography';

withDefaults(defineProps<TypographyProps>(), {
  weight: '3',
  component: 'span',
  caps: false,
});

const stylesWeight = {
  '1': styles['wrapper--weight-1'],
  '2': styles['wrapper--weight-2'],
  '3': styles['wrapper--weight-3'],
};
</script>