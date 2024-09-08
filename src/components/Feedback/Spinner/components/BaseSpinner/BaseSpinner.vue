<template>
  <component :is="Component">
    <animateTransform
      attributeName="transform"
      attributeType="XML"
      type="rotate"
      :from="`0 ${rotateCenter} ${rotateCenter}`"
      :to="`360 ${rotateCenter} ${rotateCenter}`"
      dur="0.7s"
      repeatCount="indefinite"
    />
  </component>
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
  size: 's' | 'm' | 'l'
}>();

const componentBySize = {
  s: IconSmall,
  m: IconMedium,
  l: IconLarge,
};

const rotateCenterBySize = {
  s: 12,
  m: 18,
  l: 22,
};

const Component = computed(() => componentBySize[props.size]);
const rotateCenter = computed(() => rotateCenterBySize[props.size]);
</script>