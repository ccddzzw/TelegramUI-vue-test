<template>
  <component :is="spinnerIcon" />
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import IconLarge from './icons/large.vue';
import IconMedium from './icons/medium.vue';
import IconSmall from './icons/small.vue';

const props = defineProps<{
  /**
   * Size of the spinner
   */
  size?: 'l' | 'm' | 's'
}>();

const spinnerIcon = computed(() => {
  switch (props.size) {
    case 'l':
      return IconLarge;
    case 'm':
      return IconMedium;
    default:
      return IconSmall;
  }
});
</script>