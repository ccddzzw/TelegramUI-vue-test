<template>
    <component
      v-bind="$props"
      :is="component"
      :class="[
        styles.wrapper,
      ]"
    >
      <slot></slot>
    </component>
  </template>
  
<script lang="ts" setup>
  import styles from './VisuallyHidden.module.css';
  
  withDefaults(defineProps<{
    /**
     * The HTML element to render
     */
    component?: string,
  }>(), { component: 'span' });
  
</script>