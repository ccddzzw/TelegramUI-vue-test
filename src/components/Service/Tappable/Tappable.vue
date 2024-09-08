<template>
  <component
    :is="component"
    :class="wrapperClasses"
    @pointercancel="onPointerCancel"
    @pointerdown="onPointerDown"
    v-bind="$attrs"
  >
    <Ripple v-if="hasRippleEffect" :clicks="clicks" />
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { usePlatform } from '../../../hooks/usePlatform'
import { useRipple } from './components/Ripple/hooks/useRipple'
import Ripple from './components/Ripple/Ripple.vue'
import styles from './Tappable.module.css';
import { classNames } from '../../../helpers/classNames';

export default defineComponent({
  name: 'Tappable',
  components: { Ripple },
  inheritAttrs: false,
  props: {
    component: {
      type: [String, Object] as PropType<string | object>,
      default: 'div'
    },
    interactiveAnimation: {
      type: String as PropType<'opacity' | 'background'>,
      default: 'background'
    },
    readOnly: Boolean
  },
  setup(props) {
    const platform = usePlatform()
    const { clicks, onPointerCancel, onPointerDown } = useRipple()

    const hasRippleEffect = computed(() => 
      platform === 'base' && props.interactiveAnimation === 'background' && !props.readOnly
    )

    const wrapperClasses = computed(() => {
      classNames(
        styles.wrapper,
        platform === 'ios' && styles['wrapper--ios'],
        props.interactiveAnimation === 'opacity' && styles['wrapper--opacity']
      )
    });

    return {
      clicks,
      onPointerCancel,
      onPointerDown,
      hasRippleEffect,
      wrapperClasses
    }
  }
})
</script>