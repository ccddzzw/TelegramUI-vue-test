<template>
    <Image
      :style="{ borderRadius: '50%', ...style }"
      :class="classes"
      :fallbackIcon="fallbackIconComponent"
      :size="size"
      v-bind="$attrs"
    />
</template>
  
<script lang="ts" setup>
  import { computed } from 'vue';
  import { classNames } from '../../../helpers/classNames'
  import Image from '../Image/Image.vue';
  import { ImageProps } from '../Image/image';
  import AvatarAcronym from './components/AvatarAcronym.vue';
  import AvatarBadge from './components/AvatarBadge.vue';
  import styles from './Avatar.module.css';
  
  interface AvatarProps extends ImageProps {
    /** One or two letters to be shown as a placeholder. `fallbackIcon` will not be used if `acronym` is provided. */
    acronym?: string;
  }
  
  const props = withDefaults(defineProps<AvatarProps>(), {
    acronym: undefined,
    fallbackIcon: undefined,
    size: undefined,
  });
  
  const classes = computed(() => classNames(
    styles.wrapper,
    props.acronym && styles['wrapper--withAcronym'],
    props.className
  ));
  
  const fallbackIconComponent = computed(() => 
    props.acronym ? <AvatarAcronym size={props.size}>{props.acronym}</AvatarAcronym> : props.fallbackIcon
  );
  
  // Expose AvatarBadge as a subcomponent
  defineExpose({
    Badge: AvatarBadge
  });
</script>