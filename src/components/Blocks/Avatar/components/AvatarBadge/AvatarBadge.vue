<template>
    <Badge
      type="number"
      :class="classes"
      v-bind="$attrs"
    >
      <slot></slot>
    </Badge>
</template>
  
<script lang="ts" setup>
  import { computed } from 'vue';
  import { classNames } from '../../../../../helpers/classNames';
  import { BadgeProps } from '../../../Badge/Badge';
  import Badge from '../../../Badge/Badge.vue';
  import styles from './AvatarBadge.module.css';
  
  interface AvatarBadgeProps extends BadgeProps {
    type: 'number';
  }
  
  const props = withDefaults(defineProps<AvatarBadgeProps>(), {
    type: 'number',
  });
  
  const classes = computed(() => classNames(styles.wrapper, props.class));
  
  if (props.type !== 'number') {
    throw new Error('[AvatarBadge]: Component supports only type="number"');
  }
</script>