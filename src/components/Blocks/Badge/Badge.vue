<template>
    <span 
      v-bind="$props"
      :class="[
        styles.wrapper,
        typeStyles[props.type],
        modeStyles[props.mode],
        props.type === 'number' && props.large && styles['wrapper--large'],
      ]"
    >
      <template v-if="hasContent && type === 'number'">
        <Subheadline v-if="large" Component="span" level="2" weight="2">
          <slot></slot>
        </Subheadline>
        <Caption v-else weight="2">
          <slot></slot>
        </Caption>
      </template>
    </span>
</template>
  
<script lang="ts" setup>
  import { computed, useSlots } from 'vue';
  import styles from './Badge.module.css';
  import { Caption } from '../../Typography/Caption';
  import { Subheadline } from '../../Typography/Subheadline';
  import { BadgeProps } from './Badge';

  const slots = useSlots();

  const props = withDefaults(defineProps<BadgeProps>(), {
    mode: 'primary',
    large: false,
  });
  
  const typeStyles = {
    number: styles['wrapper--number'],
    dot: styles['wrapper--dot'],
  };
  
  const modeStyles = {
    primary: styles['wrapper--primary'],
    critical: styles['wrapper--critical'],
    secondary: styles['wrapper--secondary'],
    gray: styles['wrapper--gray'],
    white: styles['wrapper--white'],
  };
  
  const hasContent = computed(() => !!slots.default);
</script>