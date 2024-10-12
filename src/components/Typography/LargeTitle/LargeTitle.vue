<template>
    <Typography
      v-bind="$props"
      :class="styles.wrapper"
    >
      <slot></slot>
    </Typography>
</template>
  
<script lang="ts" setup>
  import styles from './LargeTitle.module.css';
  import { TypographyProps, Typography } from '../Typography';
  
  type LargeTitleProps = TypographyProps;

  withDefaults(defineProps<LargeTitleProps>(), {
    component: 'h1',
  });
</script> 