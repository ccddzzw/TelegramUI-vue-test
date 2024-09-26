<template>
    <component
      :is="Component"
      :type="'button'"
      :class="classes"
      v-bind="$attrs"
    >
      <Spinner v-if="loading" :class="styles.spinner" size="s" />
      <component :is="before" v-if="before" class="before">
        <slot name="before"></slot>
      </component>
      <ButtonTypography :class="styles.conent" :size="size">
        <slot></slot>
      </ButtonTypography>
      <component :is="after" v-if="after" class="after">
        <slot name="after"></slot>
      </component>
    </component>
</template>
  
<script lang="ts" setup>
  import type { BaseHTMLAttributes, ButtonHTMLAttributes} from 'vue';
  import { computed, VNode } from 'vue';
  import Spinner from '../../../components/Feedback/Spinner/Spinner.vue';
  import ButtonTypography from './ButtonTypography/ButtonTypography.vue';
  import { usePlatform } from '../../../hooks/usePlatform';
  import { classNames } from '../../../helpers/classNames';
  import styles from './Button.module.css';

  export interface ButtonProps extends /* @vue-ignore */ BaseHTMLAttributes,  /* @vue-ignore */ ButtonHTMLAttributes {
    /** Controls the size of the button, influencing padding and font size. */
    size?: 's' | 'm' | 'l';
    /** Inserts a component before the button text, typically an icon. */
    before?: VNode;
    /** Inserts a component after the button text, such as a badge or indicator. */
    after?: VNode;
    /** If true, stretches the button to fill the width with its container. */
    stretched?: boolean;
    /** Defines the button's visual style, affecting its background and text color. */
    mode?: 'filled' | 'bezeled' | 'plain' | 'gray' | 'outline' | 'white';
    /** Displays a loading indicator in place of the button content when true. */
    loading?: boolean;
    /** Specifies the root element type for the button, allowing for semantic customization or integration with routing libraries. */
    Component?: string;
  }
  
  const props = withDefaults(defineProps<ButtonProps>(), {
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
  
</script>