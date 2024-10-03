<template>
    <Typography
      :class="classes"
      v-bind="$props"
    >
      <slot></slot>
    </Typography>
  </template>
  
<script lang="ts" setup>
  import { computed } from 'vue';
  import { classNames } from '../../../helpers/classNames';
  import styles from './LargeTitle.module.css';
import { TypographyProps } from '../Typography/Typography';
import Typography from '../Typography/Typography.vue';
  
  type LargeTitleProps = TypographyProps;
  
  const props = withDefaults(defineProps<LargeTitleProps>(), {
    component: 'h1',
  });
  
  const classes = computed(() => classNames(styles.wrapper, props.class));
</script> 