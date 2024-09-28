<template>
  <component
    :is="Component"
    :class="classes"
    @pointercancel="onPointerCancel"
    @pointerdown="onPointerDown"
    v-bind="$attrs"
  >
    <Ripple v-if="hasRippleEffect" :clicks="clicks" />
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
import { computed, TextareaHTMLAttributes } from 'vue'
import { usePlatform } from '../../../hooks/usePlatform'
import { useRipple } from './components/Ripple/hooks/useRipple'
import Ripple from './components/Ripple/Ripple.vue'
import styles from './Tappable.module.css';
import { classNames } from '../../../helpers/classNames';

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

const classes = computed(() => 
  classNames(
    styles.wrapper,
    platform === 'ios' && styles['wrapper--ios'],
    props.interactiveAnimation === 'opacity' && styles['wrapper--opacity']
  )
);
</script>