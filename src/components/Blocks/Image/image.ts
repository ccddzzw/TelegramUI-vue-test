import { ImgHTMLAttributes, VNode } from "vue";

export interface ImageProps extends /* @vue-ignore */ ImgHTMLAttributes {
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