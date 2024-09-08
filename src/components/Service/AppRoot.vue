<template>
  <div :class="['tgui-app-root', platformClass, appearanceClass]">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'AppRoot',
  props: {
    platform: {
      type: String,
      default: 'base'
    },
    appearance: {
      type: String,
      default: 'light'
    }
  },
  setup(props) {
    const platformClass = computed(() => `tgui-app-root--${props.platform}`)
    const appearanceClass = computed(() => `tgui-app-root--${props.appearance}`)

    return {
      platformClass,
      appearanceClass
    }
  }
})
</script>
