import { Component } from 'vue'


export interface TypographyProps {
  /** Controls the font weight of the text, with options ranging from light to bold. */
  weight?: '1' | '2' | '3'
  /** If true, transforms the text to uppercase for stylistic emphasis. */
  caps?: boolean
  /** Specifies the HTML tag or Vue component used to render the text, defaulting to `span`. */
  component?: string | Component
  /** When true, removes the default margins around the text, useful for inline styling or custom layouts. */
  plain?: boolean
  className?: string
}