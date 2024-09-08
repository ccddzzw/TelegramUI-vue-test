<template>
  <svg
    :class="styles.wrapper"
    :width="circleAttributes?.size"
    :height="circleAttributes?.size"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      :cx="circleSize"
      :cy="circleSize"
      :r="circleAttributes?.radius"
      :stroke-opacity="0.1"
      :stroke-width="circleAttributes?.strokeWidth"
      fill="none"
    />
    <circle
      fill="none"
      :cx="circleSize"
      :cy="circleSize"
      :r="circleAttributes?.radius"
      :stroke-width="circleAttributes?.strokeWidth"
      stroke-linecap="round"
      :stroke-dasharray="circumference"
      :stroke-dashoffset="strokeDashoffset"
    />
  </svg>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import styles from './CircularProgress.module.css';
import { getCircleAttributes } from './helper/getCircleAttributes';

const props = withDefaults(defineProps<{
  /**
   * Specifies the size of the circular progress indicator. Can be 'small', 'medium', or 'large'.
   */
  size?: 'small' | 'medium' | 'large',
  /**
   * Current progress of the circular indicator, expressed as a percentage from 0 to 100.
   */
  progress?: number
}>(), {
  size: 'medium',
  progress: 0
});

const circleAttributes = computed(() => getCircleAttributes(props.size));

const circleSize = computed(() => circleAttributes.value ? circleAttributes.value.size / 2 : 0);

const circumference = computed(() => 
  circleAttributes.value ? 2 * Math.PI * circleAttributes.value.radius : 0
);

const strokeDashoffset = computed(() => 
  circumference.value * ((100 - props.progress) / 100)
);
</script>