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
  
<script lang="ts" setup>
  import { computed, ref, isVNode } from 'vue';
  import type { ImgHTMLAttributes, VNode } from 'vue';
  import { getBorderRadius } from './helpers/getBorderRadius';
  import styles from './Image.module.css';
  import { classNames } from '../../../helpers/classNames';
  // import ImageBadge from './components/ImageBadge/ImageBadge.vue';

  interface ImageProps extends /* @vue-ignore */ ImgHTMLAttributes {
    /** Specifies the size of the image, with a default of 40. Sizes are defined in pixels. */
    size?: 20 | 24 | 28 | 40 | 48 | 96;
    /** An element (often an icon) displayed when the image fails to load or the `src` attribute is not provided. */
    fallbackIcon?: VNode;
    src?: string;
    alt?: string;
    crossorigin?: "anonymous" | "use-credentials" | "";
    decoding?: "async" | "auto" | "sync";
    loading?: "eager" | "lazy";
    referrerpolicy?: "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url";
    sizes?: string;
    srcset?: string;
    usemap?: string;
  }
  
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