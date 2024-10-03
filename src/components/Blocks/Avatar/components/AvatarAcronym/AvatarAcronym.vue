<template>
    <component
      :is="componentType"
      :weight="weight"
      :level="level"
      caps
      v-bind="$attrs"
    >
      <slot></slot>
    </component>
</template>
  
<script lang="ts" setup>
  import { computed } from 'vue';
  import Caption from '../../../../../components/Typography/Caption/Caption.vue';
  import { Headline } from 'components/Typography/Headline/Headline';
  import { LargeTitle } from 'components/Typography/LargeTitle/LargeTitle';
  import { Title } from 'components/Typography/Title/Title';
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