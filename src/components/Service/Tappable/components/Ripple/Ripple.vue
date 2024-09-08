<template>
    <span aria-hidden class="wrapper">
      <span
        v-for="wave in clicks"
        :key="wave.date"
        class="wave"
        :style="{ top: `${wave.y}px`, left: `${wave.x}px` }"
      />
    </span>
  </template>
  
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Wave } from './Wave';
  
export default defineComponent({
    name: 'Ripple',
    props: {
      clicks: {
        type: Array as PropType<Wave[]>,
        required: true,
      },
    },
  })
</script>