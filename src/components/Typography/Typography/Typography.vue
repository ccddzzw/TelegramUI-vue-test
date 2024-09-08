<template>
  <component
    :is="component"
    :class="classes"
    v-bind="$attrs"
  >
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import styles from './Typography.module.css';
import { classNames } from '../../../helpers/classNames';
import { TypographyProps } from './Typography';

const props = withDefaults(defineProps<TypographyProps>(), {
  weight: '3',
  component: 'span',
  caps: false,
});

const stylesWeight = {
  '1': styles['wrapper--weight-1'],
  '2': styles['wrapper--weight-2'],
  '3': styles['wrapper--weight-3'],
};

const classes = computed(() => classNames(
  styles.wrapper,
  props.plain && styles['wrapper--plain'],
  props.weight && stylesWeight[props.weight],
  props.caps && styles['wrapper--caps'],
));
</script>