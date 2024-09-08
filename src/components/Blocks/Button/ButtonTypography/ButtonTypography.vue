<template>
    <Text v-if="size === 'l'" weight="2" v-bind="$attrs" />
    <Subheadline v-else level="2" weight="2" v-bind="$attrs" />
</template>
  
<script lang="ts" setup>
  import Text from '../../../Typography/Text/Text.vue';
  import Subheadline from '../../../Typography/Subheadline/Subheadline.vue';
  
  defineProps<{
    /**
     * Size of the button typography
     */
    size: 's' | 'm' | 'l'
  }>();
</script>