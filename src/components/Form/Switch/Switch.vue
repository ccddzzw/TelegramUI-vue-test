<template>
    <label
      :class="[
        styles.wrapper,
        platformStyles[platform],
        { 
          [styles['wrapper--disabled']]: disabled 
        },
      ]"
    >
      <VisuallyHidden
        v-bind="$attrs"
        component="input"
        type="checkbox"
        :class="styles.input"
        :disabled="disabled"
      />
      <div aria-hidden="true" :class="styles.control" />
      <slot></slot>
    </label>
</template>
  
<script lang="ts" setup>
  import styles from './Switch.module.css';
  import { usePlatform } from '../../../hooks/usePlatform';
  import { VisuallyHidden } from '../../Service/VisuallyHidden';

  interface SwitchProps {
    disabled?: boolean;
  }
  
  withDefaults(defineProps<SwitchProps>(), {
    disabled: false,
  });
  
  const platformStyles = {
    base: styles['wrapper--base'],
    ios: styles['wrapper--ios'],
  };
  
  const platform = usePlatform();
</script>