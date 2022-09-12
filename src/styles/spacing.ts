import { css, CSSProperties } from "@stitches/react";
import { mapValues } from "../utility/object";
import type { SetRequired } from "type-fest";

/**
 * Standard spacing values expressed as number of pixels
 */
export const rawSpacing = {
  xxxxl: 80,
  xxxl: 64,
  xxl: 40,
  xl: 32,
  l: 24,
  m: 16,
  s: 12,
  xs: 8,
  xxs: 4,
  xxxs: 2,
};

/**
 * Standard spacing values expressed as pixel CSS strings
 */
export const spacing = mapValues(rawSpacing, (numPx) => `${numPx}px`);

interface StackCssProps
  extends SetRequired<
    Pick<CSSProperties, "gap" | "alignItems" | "flexDirection" | "flexWrap">,
    "gap" | "flexDirection"
  > {
  display?: "flex" | "inline-flex";
}

/**
 * CSS mixin to use on a parent component to make each of its children display
 * with even spacing, known as a "stack"
 *
 * @see {@link https://every-layout.dev/layouts/stack/}
 *
 * @example
 * const MyComponent = () => (
 *   <ul css={stackCss({ flexDirection: "column", gap: spacing.m })}>
 *     <li>Elem 1</li>
 *     <li>Elem 2</li>
 *   </ul>
 * )
 * // ^^ these list items will be side by side with spacing.m space between them
 */
export function stackCss(props: StackCssProps) {
  return css({ ...props })();
}
