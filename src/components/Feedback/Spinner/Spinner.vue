<template>
    <div
      role="status"
      :class="classes"
    >
      <component :is="SpinnerComponent" :size="size" />
    </div>
</template>
  
<script lang="ts" setup>
  import { computed } from 'vue';
  import styles from './Spinner.module.css';
  import { classNames } from '../../../helpers/classNames';
  import { usePlatform } from '../../../hooks/usePlatform';
  import BaseSpinner from './components/BaseSpinner/BaseSpinner.vue';
  import IOSSpinner from './components/IOSSpinner/IOSSpinner.vue';
  
  const props = withDefaults(defineProps<{
    /**
     * Determines the size of the spinner. Can be 'small' (s), 'medium' (m), or 'large' (l).
     */
    size?: 's' | 'm' | 'l',
    /**
     * Additional CSS class names
     */
    className?: string,
  }>(), { size: 'm' });
  
  const platform = usePlatform();
  
  const sizeStyles = {
    s: styles['wrapper--s'],
    m: styles['wrapper--m'],
    l: styles['wrapper--l'],
  };
 
  const SpinnerComponent = computed(() => platform === 'ios' ? IOSSpinner : BaseSpinner);
  
  const classes = computed(() => classNames(
    styles.wrapper,
    platform === 'ios' && styles['wrapper--ios'],
    sizeStyles[props.size],
    props.className,
  ));
</script>