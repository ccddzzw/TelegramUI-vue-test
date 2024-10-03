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
  import styles from './Headline.module.css';
  import { TypographyProps } from '../Typography/Typography';
  import Typography from '../Typography/Typography.vue';
  
  interface HeadlineProps extends TypographyProps {}
  
  const props = withDefaults(defineProps<HeadlineProps>(), {
    component: 'h5',
  });
  
  const classes = computed(() => classNames(styles.wrapper, props.class));
</script>