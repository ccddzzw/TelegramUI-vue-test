<template>
  <Typography
    :weight="weight"
    :caps="caps"
    :plain="plain"
    :class="[styles.wrapper, titleLevelStyles[level], className]"
    :component="componentTag"
  >
    <slot></slot>
  </Typography>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import styles from './Title.module.css';
import Typography from '../Typography/Typography.vue';
import { TypographyProps } from '../Typography/Typography';

interface TitleProps extends TypographyProps {
  /** 
   * Determines the size and semantic tag of the title, with options for `h2`, `h3`, or `h4`. 
  */
  level?: '1' | '2' | '3';
}

const props = withDefaults(defineProps<TitleProps>(), {
  level: '2',
});

const titleLevelTags = {
  '1': 'h2',
  '2': 'h3',
  '3': 'h4',
};

const titleLevelStyles = {
  '1': styles['wrapper--1'],
  '2': styles['wrapper--2'],
  '3': styles['wrapper--3'],
};

const componentTag = computed(() => props.component || titleLevelTags[props.level]);
</script>