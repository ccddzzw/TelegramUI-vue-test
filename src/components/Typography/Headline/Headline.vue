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
  import styles from './Headline.module.css';
  import { TypographyProps, Typography } from '../Typography';
  
  interface HeadlineProps extends TypographyProps {}
  
  withDefaults(defineProps<HeadlineProps>(), {
    component: 'h5',
  });
</script>