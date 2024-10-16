<template>
  <Badge
    v-bind="$props"
    type="number"
    :class="[
      styles.wrapper,
    ]"
  >
    <slot></slot>
  </Badge>
</template>

<script lang="ts" setup>
  import Badge from '../../../Badge/Badge.vue';
  import styles from './ImageBadge.module.css';
  import type { BadgeProps } from '../../../Badge/Badge';

  interface ImageBadgeProps extends BadgeProps {
    /**
     * The type of the badge
     */
    type: 'number';
  }

  const props = withDefaults(defineProps<ImageBadgeProps>(), {
    type: 'number',
  });

  // Validate prop type
  if (props.type !== 'number') {
    console.error('[ImageBadge]: Component supports only type="number"');
  }
</script>