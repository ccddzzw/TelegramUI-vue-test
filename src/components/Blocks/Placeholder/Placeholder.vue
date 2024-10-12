<template>
    <section 
      v-bind="$attrs"
      :class="classes" 
    >
      <slot></slot>
      <dl v-if="hasHeader || hasDescription" :class="styles.fields">
        <Title v-if="hasHeader" component="dt" level="3" weight="2">
          <component :is="header" v-if="isVNode(header)" />
          <template v-else>{{ header }}</template>
        </Title>
        <Text v-if="hasDescription" :class="styles.description" component="dd">
          <component :is="description" v-if="isVNode(description)" />
          <template v-else>{{ description }}</template>
        </Text>
      </dl>
      <slot name="action" v-if="$slots.action"></slot>
    </section>
</template>


  
<script lang="ts" setup>
  import { computed, VNode, isVNode } from 'vue';
  import styles from './Placeholder.module.css';
  import Text from '../../Typography/Text/Text.vue';
  import Title from '../../Typography/Title/Title.vue';
  import { classNames } from '../../../helpers/classNames';

  export interface PlaceholderProps {
    header?: VNode | string;
    description?: VNode | string;
    className?: string;
  }
  
  const props = defineProps<PlaceholderProps>();

  const classes = computed(() => classNames(styles.wrapper, props.className));
  
  const hasHeader = computed(() => props.header !== undefined);
  const hasDescription = computed(() => props.description !== undefined);
</script>