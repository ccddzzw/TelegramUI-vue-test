<template>
  <Typography
    v-bind="$props"
    :class="[
      styles.wrapper,
      subheadlineLevelStyles[level],
    ]" 
  >
    <slot></slot>
  </Typography>
</template>

<script lang="ts" setup>
import styles from './Subheadline.module.css';
import { TypographyProps, Typography } from '../Typography';

type SubheadlineLevel = '1' | '2';

interface SubheadlineProps extends TypographyProps {
    /** Determines the size of the subheadline, with `1` being the default and '2' providing a smaller option. */
    level?: SubheadlineLevel,
}

withDefaults(defineProps<SubheadlineProps>(), {
    level: '1',
    component: 'h6',
});

const subheadlineLevelStyles: Record<SubheadlineLevel, string> = {
    '1': styles['wrapper--1'],
    '2': styles['wrapper--2'],
};
</script>