<template>
  <Typography
    :weight="weight"
    :caps="caps"
    :component="component"
    :class="[
      styles.wrapper,
      $attrs.class
    ]"
    v-bind="$attrs"
  >
    <slot></slot>
  </Typography>
</template>

<script lang="ts" setup>
import styles from './Text.module.css';
import Typography from '../Typography/Typography.vue';
import { TypographyProps } from '../Typography/Typography';

type TextProps = Omit<TypographyProps, 'plain'>

withDefaults(defineProps<TextProps>(), {
  component: 'span',
  caps: false,
  weight: '1',
});
</script>