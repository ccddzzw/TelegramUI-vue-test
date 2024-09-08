<template>
    <Tappable
      component="button"
      :class="classes"
      v-bind="$attrs"
    >
      <slot></slot>
    </Tappable>
  </template>
 
<script lang="ts" setup>
  import { computed } from 'vue';
  import styles from './IconButton.module.css';
  import { classNames } from '../../../helpers/classNames';
  import Tappable from '../../../components/Service/Tappable/Tappable.vue';

 /**
 * Renders an icon button with customizable size and mode. It utilizes the `Tappable` component for enhanced
 * touch interaction, allowing it to serve various UI actions efficiently.
 */
  const props = withDefaults(defineProps<{
    /** Specifies the button size, affecting icon scaling. Recommended icon sizes are 20px for 's', 24px for 'm', and 28px for 'l'. */
    size?: 's' | 'm' | 'l',
    /** Defines the button's visual style, affecting its color and background. */
    mode?: 'bezeled' | 'plain' | 'gray' | 'outline',
  }>(), {
    size: 'm',
    mode: 'bezeled',
  });
  
  const modeStyles = {
    bezeled: styles['wrapper--bezeled'],
    plain: styles['wrapper--plain'],
    gray: styles['wrapper--gray'],
    outline: styles['wrapper--outline'],
  };
  
  const sizeStyles = {
    s: styles['wrapper--s'],
    m: styles['wrapper--m'],
    l: styles['wrapper--l'],
  };

  const classes = computed(() => {
    return classNames(
      styles.wrapper,
      modeStyles[props.mode],
      sizeStyles[props.size]
    );
  });
</script>