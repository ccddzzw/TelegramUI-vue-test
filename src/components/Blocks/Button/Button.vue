<template>
    <component
      :is="Component"
      :type="type || 'button'"
      :class="classes"
      v-bind="$attrs"
      @click="$emit('click', $event)"
    >
      <Spinner v-if="loading" class="spinner" size="s" />
      <div v-if="before" class="before">
        <slot name="before">{{ before }}</slot>
      </div>
      <ButtonTypography :class="styles.conent" :size="size">
        <slot>{{ children }}</slot>
      </ButtonTypography>
      <div v-if="after" class="after">
        <slot name="after">{{ after }}</slot>
      </div>
    </component>
</template>
  
<script lang="ts" setup>
  import { computed } from 'vue';
  import Spinner from '../../../components/Feedback/Spinner/Spinner.vue';
  import ButtonTypography from './ButtonTypography/ButtonTypography.vue';
  import { usePlatform } from '../../../hooks/usePlatform';
  import { classNames } from '../../../helpers/classNames';
  import styles from './Button.module.css';
  
  const props = withDefaults(defineProps<{
    type?: string;
    size?: 's' | 'm' | 'l';
    before?: any;
    after?: any;
    stretched?: boolean;
    children?: any;
    mode?: 'filled' | 'bezeled' | 'plain' | 'gray' | 'outline' | 'white';
    loading?: boolean;
    Component?: string | object;
  }>(), {
    size: 'm',
    mode: 'filled',
    Component: 'button'
  });
  
  const platform = usePlatform();
  
  const classes = computed(() => classNames(
    styles.wrapper,
    props.mode && styles[`wrapper--${props.mode}`],
    props.size && styles[`wrapper--${props.size}`],
    platform === 'ios' && styles['wrapper--ios'],
    props.stretched && styles['wrapper--stretched'],
    props.loading && styles['wrapper--loading']
  ));
  
  defineEmits(['click']);
</script>