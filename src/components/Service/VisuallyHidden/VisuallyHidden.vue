<template>
    <component
      :is="component"
      :class="classes"
      v-bind="$attrs"
    >
      <slot></slot>
    </component>
  </template>
  
  <script lang="ts" setup>
  import { computed } from 'vue';
  import styles from './VisuallyHidden.module.css';
  import { classNames } from '../../../helpers/classNames';
  
  const props = withDefaults(defineProps<{
    /**
     * The HTML element to render
     */
    component?: string,
  }>(), { component: 'span' });
  
  const classes = computed(() => classNames(styles.wrapper));
  </script>