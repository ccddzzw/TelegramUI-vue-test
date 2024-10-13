<template>
    <div
      role="status"
      :class="[
        styles.wrapper,
        {
          [styles['wrapper--ios']]: platform === 'ios',
        },
        sizeStyles[props.size],
      ]"
    >
      <component :is="SpinnerComponent" :size="size" />
    </div>
</template>
  
<script lang="ts" setup>
  import { computed } from 'vue';
  import styles from './Spinner.module.css';
  import { usePlatform } from '../../../hooks/usePlatform';
  import { BaseSpinner } from './components/BaseSpinner';
  import { IOSSpinner } from './components/IOSSpinner';
  
  const props = withDefaults(defineProps<{
    /**
     * Determines the size of the spinner. Can be 'small' (s), 'medium' (m), or 'large' (l).
     */
    size?: 's' | 'm' | 'l',
  }>(), { size: 'm' });
  
  const platform = usePlatform();
  
  const sizeStyles = {
    s: styles['wrapper--s'],
    m: styles['wrapper--m'],
    l: styles['wrapper--l'],
  };
 
  const SpinnerComponent = computed(() => platform === 'ios' ? IOSSpinner : BaseSpinner);
</script>