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
  import { BadgeProps } from '../../../Badge/Badge';
  import Badge from '../../../Badge/Badge.vue';
  import styles from './AvatarBadge.module.css';
  
  interface AvatarBadgeProps extends BadgeProps {
    type: 'number';
  }
  
  const props = withDefaults(defineProps<AvatarBadgeProps>(), {
    type: 'number',
  });
  
  if (props.type !== 'number') {
    throw new Error('[AvatarBadge]: Component supports only type="number"');
  }
</script>