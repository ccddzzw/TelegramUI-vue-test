<template>
  <Typography
    v-bind="$props"
    :class="[
      styles.wrapper,
      captionLevelStyles[level],
    ]"
  >
    <slot></slot>
  </Typography>
</template>

<script lang="ts" setup>
import styles from './Caption.module.css';
import { TypographyProps, Typography } from '../Typography';

type CaptionLevel = '1' | '2';

interface CaptionProps extends Omit<TypographyProps, 'plain'> {
  /** The size level of the caption, influencing its styling and typography size. */
  level?: CaptionLevel;
}

withDefaults(defineProps<CaptionProps>(), {
  level: '1',
  component: 'span',
  weight: '1',
  caps: false,
});

const captionLevelStyles: Record<CaptionLevel, string> = {
  '1': styles['wrapper--1'],
  '2': styles['wrapper--2'],
};

</script>