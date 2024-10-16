<template>
    <component
      v-bind="$attrs"
      :is="componentType"
      :weight="weight"
      :level="level"
      caps
    >
      <slot></slot>
    </component>
</template>
  
<script lang="ts" setup>
  import { computed } from 'vue';
  import Caption from '../../../../Typography/Caption/Caption.vue';
  import Headline from '../../../../Typography/Headline/Headline.vue';
  import LargeTitle from '../../../../Typography/LargeTitle/LargeTitle.vue';
  import Title from '../../../../Typography/Title/Title.vue';
  import { TypographyProps } from '../../../../Typography/Typography/Typography';
  import { ImageProps } from '../../../Image/image';
  
  export interface AvatarAcronymProps extends TypographyProps {
    size: ImageProps['size'];
  }

  const props = defineProps<{
    /**
     * The size of the avatar
     */
    size: number;
  }>();
  
  const componentType = computed(() => {
    if (!props.size) {
      return null;
    }
  
    if (props.size <= 28) {
      return Caption;
    }
  
    if (props.size === 40) {
      return Headline;
    }
  
    if (props.size === 48) {
      return Title;
    }
  
    return LargeTitle;
  });
  
  const weight = computed(() => {
    if (props.size <= 28 || props.size === 48 || props.size > 48) {
      return '1';
    }
    return '2';
  });
  
  const level = computed(() => {
    if (props.size <= 24) {
      return '2';
    }
    if (props.size === 48) {
      return '3';
    }
    return undefined;
  });
</script>