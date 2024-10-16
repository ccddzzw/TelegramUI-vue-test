<template>
  <div class="appearance-decorator">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  
  const props = defineProps({
    appearance: {
      type: String,
      default: 'light',
    },
  });
  
  const backgroundColor = computed(() => 
    props.appearance === 'dark' ? '#212121' : '#FFF'
  );
</script>

<style scoped>
.appearance-decorator {
  position: relative;
}

.appearance-decorator::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background-color: v-bind(backgroundColor);
}
</style>