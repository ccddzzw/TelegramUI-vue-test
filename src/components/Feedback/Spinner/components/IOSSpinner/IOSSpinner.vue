<template>
  <component :is="spinnerIcon" />
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { IconLarge, IconMedium, IconSmall } from './icons';
  
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