<template>
    <Typography
      :class="styles.wrapper"
      v-bind="$props"
    >
      <slot></slot>
    </Typography>
</template>
  
<script lang="ts" setup>
  import styles from './LargeTitle.module.css';
  import { TypographyProps } from '../Typography/Typography';
  import Typography from '../Typography/Typography.vue';
  
  type LargeTitleProps = TypographyProps;

  withDefaults(defineProps<LargeTitleProps>(), {
    component: 'h1',
  });
</script> 