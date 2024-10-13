<template>
  <Typography
    v-bind="$props"
    :class="[
      styles.wrapper,
    ]"
  >
    <slot></slot>
  </Typography>
</template>

<script lang="ts" setup>
import styles from './Text.module.css';
import { TypographyProps, Typography } from '../Typography';

type TextProps = Omit<TypographyProps, 'plain'>

withDefaults(defineProps<TextProps>(), {
  component: 'span',
});
</script>