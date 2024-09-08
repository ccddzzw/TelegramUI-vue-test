<template>
  <Typography
    :weight="weight"
    :caps="caps"
    :plain="plain"
    :class="classes" 
    :component="component"
  >
    <slot></slot>
  </Typography>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import Typography from '../Typography/Typography.vue';
import { TypographyProps } from '../Typography/Typography';
import { classNames } from '../../../helpers/classNames';
import styles from './Subheadline.module.css';


type SubheadlineLevel = '1' | '2';

interface SubheadlineProps extends TypographyProps {
    /** Determines the size of the subheadline, with `1` being the default and '2' providing a smaller option. */
    level?: SubheadlineLevel,
}

const props = withDefaults(defineProps<SubheadlineProps>(), {
    level: '1',
    component: 'h6',
});

const subheadlineLevelStyles: Record<SubheadlineLevel, string> = {
    '1': styles['wrapper--1'],
    '2': styles['wrapper--2'],
};

const classes = computed(() => 
    classNames(
        styles.wrapper,
        subheadlineLevelStyles[props.level],
    )
);
</script>