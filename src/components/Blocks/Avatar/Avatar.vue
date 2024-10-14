<template>
    <Image
      v-bind="$props"
      :style="{ borderRadius: '50%' }"
      :class="classes"
      :fallbackIcon="fallbackIconComponent"
      :size="size"
      :src="src"
    >
      <slot></slot>
    </Image>
</template>
  
<script lang="ts" setup>
  import { computed, h } from 'vue';
  import { classNames } from '../../../helpers/classNames'
  import Image from '../Image/Image.vue';
  import { ImageProps } from '../Image/image';
  import AvatarAcronym from './components/AvatarAcronym/AvatarAcronym.vue';
  import AvatarBadge from './components/AvatarBadge/AvatarBadge.vue';
  import styles from './Avatar.module.css';
  
  interface AvatarProps extends ImageProps {
    /** One or two letters to be shown as a placeholder. `fallbackIcon` will not be used if `acronym` is provided. */
    acronym?: string;
  }
  
  const props = withDefaults(defineProps<AvatarProps>(), {});
  
  const classes = computed(() => classNames(
    styles.wrapper,
    props.acronym && styles['wrapper--withAcronym'],
    props.class
  ));
  
  const fallbackIconComponent = computed(() => 
    props.acronym
      ? h(AvatarAcronym, { size: props.size as number }, () => props.acronym)
      : props.fallbackIcon
  );
  
  defineExpose({
    Badge: AvatarBadge
  });
</script>