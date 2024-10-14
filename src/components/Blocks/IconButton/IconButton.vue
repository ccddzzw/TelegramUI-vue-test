<template>
    <Tappable
      v-bind="$attrs"
      :class="[
        styles.wrapper,
        modeStyles[props.mode],
        sizeStyles[props.size]
      ]"
      Component="button"
    >
      <slot />
    </Tappable>
  </template>
 
<script lang="ts" setup>
  import styles from './IconButton.module.css';
  import { Tappable } from '../../../components/Service/Tappable/index';

  export interface IconButtonProps {
    /** Specifies the button size, affecting icon scaling. Recommended icon sizes are 20px for 's', 24px for 'm', and 28px for 'l'. */
    size?: 's' | 'm' | 'l';
    /** Defines the button's visual style, affecting its color and background. */
    mode?: 'bezeled' | 'plain' | 'gray' | 'outline';
  }

  const props = withDefaults(defineProps<IconButtonProps>(), {
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
</script>