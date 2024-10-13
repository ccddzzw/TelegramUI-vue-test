<template>
  <component
    v-bind="$props"
    :is="Component"
    :class="[
      styles.wrapper,
      {
        [styles['wrapper--ios']]: platform === 'ios',
        [styles['wrapper--opacity']]: props.interactiveAnimation === 'opacity',
      }
    ]"
    @pointercancel="onPointerCancel"
    @pointerdown="onPointerDown"
  >
    <Ripple v-if="hasRippleEffect" :clicks="clicks" />
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
  import { computed, TextareaHTMLAttributes } from 'vue'
  import { usePlatform } from '../../../hooks'
  import { useRipple } from './components/Ripple/hooks/useRipple'
  import Ripple from './components/Ripple/Ripple.vue'
  import styles from './Tappable.module.css';
  
  interface TappableProps extends /* @vue-ignore */ TextareaHTMLAttributes{
    Component?: string;
    interactiveAnimation?: 'opacity' | 'background';
  }

  const props = withDefaults(defineProps<TappableProps>(), {
    component: 'div',
    interactiveAnimation: 'background',
  });


  const platform = usePlatform()
  const { clicks, onPointerCancel, onPointerDown } = useRipple()

  const hasRippleEffect = computed(() => 
    platform === 'base' && props.interactiveAnimation === 'background' && !props.readonly
  )
</script>