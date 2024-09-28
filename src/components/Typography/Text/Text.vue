<template>
  <Typography
    :weight="weight"
    :class="classes"
    :caps="caps"
    :component="component"
  >
    <slot></slot>
  </Typography>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import styles from './Text.module.css';
import { classNames } from '../../../helpers/classNames';
import Typography from '../Typography/Typography.vue';
import { TypographyProps } from '../Typography/Typography';

type TextProps = Omit<TypographyProps, 'plain'>

const props = withDefaults(defineProps<TextProps>(), {
  component: 'span',
  caps: false,
  weight: '1',
});

const classes = computed(() => classNames(styles.wrapper, props.class));
</script>