<template>
    <div
      :style="{
        width: size + 'px',
        minWidth: size + 'px',
        height: size + 'px',
        borderRadius: getBorderRadius(size) + 'px',
      }"
      :class="classes"
      v-bind="$attrs"
    >
      <img
        v-if="hasSrc"
        :alt="alt"
        :class="styles.image"
        :crossorigin="crossorigin"
        :decoding="decoding"
        :loading="loading"
        :referrerpolicy="referrerpolicy"
        :sizes="sizes"
        :src="src"
        :srcset="srcset"
        :usemap="usemap"
        @load="handleImageLoad"
        @error="handleImageError"
      />
      <div v-if="needShowFallbackIcon" :class="styles.fallback">
        <component :is="fallbackIcon" />
      </div>
      <slot></slot>
    </div>
</template>
  
<script setup lang="ts">
  import { computed, ref, isVNode } from 'vue';
  import { getBorderRadius } from './helpers/getBorderRadius';
  import styles from './Image.module.css';
  import { classNames } from '../../../helpers/classNames'; 
  
  const props = withDefaults(defineProps<ImageProps>(), {
    size: 40,
  });
  
  const emit = defineEmits<{
    (e: 'load', event: Event): void;
    (e: 'error', event: Event): void;
  }>();

  const loaded = ref(false);
  const failed = ref(false);

  const handleImageLoad = (event: Event) => {
    if (loaded.value) {
      return;
    }

    loaded.value = true;
    failed.value = false;
    emit('load', event);
  };

  const handleImageError = (event: Event) => {
    loaded.value = false;
    failed.value = true;
    emit('error', event);
  };
  
 
  const hasSrc = computed(() => props.src || props.srcset);
  const needShowFallbackIcon = computed(() => (failed.value || !hasSrc.value) && isVNode(props.fallbackIcon));
  
  const classes = computed(() => classNames(
    styles.wrapper,
    loaded && styles[`wrapper--loaded`],
    props.class
  ));

</script>

<script lang="ts">
import ImageBadge from './components/ImageBadge/ImageBadge.vue';
import { ImageProps } from './image';

export { ImageBadge };
</script>