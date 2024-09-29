<template>
  <Badge
    type="number"
    :class="classes"
    v-bind="$attrs"
  />
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { classNames } from '../../../../../helpers/classNames';
import Badge from '../../../../../components/Blocks/Badge/Badge.vue';
import styles from './ImageBadge.module.css';
import { BadgeProps } from '../../../Badge/Badge';

interface ImageBadgeProps extends BadgeProps {
  /**
   * The type of the badge
   */
  type: 'number';
}

const props = withDefaults(defineProps<ImageBadgeProps>(), {
  type: 'number',
});

const classes = computed(() => classNames(styles.wrapper, props.class));

// Validate prop type
if (props.type !== 'number') {
  console.error('[ImageBadge]: Component supports only type="number"');
}
</script>