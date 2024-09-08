<template>
  <Typography
    :weight="weight"
    :caps="caps"
    :class="classes"
    :component="component"
  >
    <slot></slot>
  </Typography>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { classNames } from '../../../helpers/classNames';
import styles from './Caption.module.css';
import { TypographyProps } from '../Typography/Typography';
import Typography from '../Typography/Typography.vue';

type CaptionLevel = '1' | '2';

interface CaptionProps extends Omit<TypographyProps, 'plain'> {
  /** The size level of the caption, influencing its styling and typography size. */
  level?: CaptionLevel;
}

const props = withDefaults(defineProps<CaptionProps>(), {
  level: '1',
  component: 'span',
  weight: '1',
  caps: false,
});

const captionLevelStyles: Record<CaptionLevel, string> = {
  '1': styles['wrapper--1'],
  '2': styles['wrapper--2'],
};

const classes = computed(() => 
  classNames(styles.wrapper, captionLevelStyles[props.level])
);
</script>