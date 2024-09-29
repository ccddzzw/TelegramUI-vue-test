<template>
    <span :class="classes">
      <template v-if="hasContent && type === 'number'">
        <Subheadline v-if="large" Component="span" level="2" weight="2">{{ content }}</Subheadline>
        <Caption v-else weight="2">{{ content }}</Caption>
      </template>
    </span>
</template>
  
<script lang="ts" setup>
  import { computed } from 'vue';
  import styles from './Badge.module.css';
  import { classNames } from '../../../helpers/classNames';
  import Caption from '../../Typography/Caption/Caption.vue';
  import Subheadline from '../../Typography/Subheadline/Subheadline.vue';
  import { BadgeProps } from './Badge';

  const props = withDefaults(defineProps<BadgeProps>(), {
    mode: 'primary',
    large: false,
  });
  
  const typeStyles = {
    number: styles['wrapper--number'],
    dot: styles['wrapper--dot'],
  };
  
  const modeStyles = {
    primary: styles['wrapper--primary'],
    critical: styles['wrapper--critical'],
    secondary: styles['wrapper--secondary'],
    gray: styles['wrapper--gray'],
    white: styles['wrapper--white'],
  };
  
  const classes = computed(() => classNames(
    styles.wrapper,
    typeStyles[props.type],
    modeStyles[props.mode],
    props.type === 'number' && props.large && styles['wrapper--large'],
  ));
  
  const hasContent = computed(() => props.content !== undefined && props.content !== null);
</script>