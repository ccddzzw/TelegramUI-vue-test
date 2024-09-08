<template>
  <div class="appearance-decorator">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'AppearanceDecorator',
  props: {
    appearance: {
      type: String,
      default: 'light',
    },
  },
  setup(props) {
    const backgroundColor = computed(() => 
      props.appearance === 'dark' ? '#212121' : '#FFF'
    );

    return { backgroundColor };
  },
});
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