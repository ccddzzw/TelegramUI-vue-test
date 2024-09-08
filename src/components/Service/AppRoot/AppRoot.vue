<template>
  <div
    ref="rootRef"
    :class="wrapperClasses"
    v-bind="$attrs"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, ref } from 'vue'
import { useAppearance } from './hooks/useAppearance'
import { usePlatform } from './hooks/usePlatform'
import { provideAppRoot, AppRootState } from './AppRootContext'
import { classNames } from '../../../helpers/classNames';
import styles from './AppRoot.module.css';

export default defineComponent({
  name: 'AppRoot',
  inheritAttrs: false,
  props: {
    platform: {
      type: String as PropType<AppRootState['platform']>,
      default: "base" 
    },
    appearance: {
      type: String as PropType<AppRootState['appearance']>,
      default: "light"
    }
  },
  setup(props) {
    const rootRef = ref<HTMLDivElement | null>(null)
    const { setState, state } = provideAppRoot()

    const appearance = useAppearance(props.appearance)
    const platform = usePlatform(props.platform)

    const wrapperClasses = computed(() => [
      classNames(styles.wrapper, 
        platform === 'ios' && styles['wrapper--ios'],
        appearance === 'dark' && styles['wrapper--dark']
      )
    ])

    setState({
      platform: platform,
      appearance: appearance,
      portalContainer: rootRef,
      isRendered: true
    })

    return {
      rootRef,
      wrapperClasses,
      state
    }
  }
})
</script>