<template>
    <section 
      v-bind="$props"
      :class="[
        styles.wrapper,
      ]" 
    >
      <slot></slot>
      <dl v-if="hasHeader || hasDescription" :class="styles.fields">
        <Title v-if="hasHeader" component="dt" level="3" weight="2">
          {{ header }}
        </Title>
        <Text v-if="hasDescription" :class="styles.description" component="dd">
          {{ description }}
        </Text>
      </dl>
      <!-- <slot name="action" v-if="$slots.action"></slot> -->
       <component v-if="hasAction" :is="action" />
    </section>
</template>


  
<script lang="ts" setup>
  import { computed, VNode, HTMLAttributes} from 'vue';
  import styles from './Placeholder.module.css';
  import { Text } from '../../Typography/Text';
  import { Title } from '../../Typography/Title';


  export interface PlaceholderProps extends /* @vue-ignore */ HTMLAttributes {
    header?: Comment | string;
    description?: Comment | string;
    action?: VNode | string;
  }
  
  const props = withDefaults(defineProps<PlaceholderProps>(), {});

  const hasHeader = computed(() => props.header !== undefined);
  const hasDescription = computed(() => props.description !== undefined);
  const hasAction = computed(() => props.action !== undefined);
</script>
