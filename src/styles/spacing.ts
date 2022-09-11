import { css } from "@stitches/react";
import { mapValues } from "../utility/object";

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

/**
 * CSS mixin to use on a parent component to make each of its children display
 * horizontally side by side, with even spacing between them, known as a
 * horizontal "stack"
 *
 * @see {@link https://every-layout.dev/layouts/stack/}
 *
 * @example
 * // (include JSX pragma at top of file if you're using CSS prop)
 * const MyComponent = () => (
 *   <ul css={horizontalStackCss.m}>
 *     <li>Elem 1</li>
 *     <li>Elem 2</li>
 *   </ul>
 * )
 * // ^^ these list items will be side by side with spacing.m space between them
 */
export const horizontalStackCss = mapValues(rawSpacing, (numPx) =>
  css({
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: `${numPx}px`,
  })
);

/**
 * CSS mixin to use on a parent component to make each of its children display
 * vertically "stacked" on each other, with even spacing between them, known as
 * a vertical "stack"
 *
 * @see {@link https://every-layout.dev/layouts/stack/}
 *
 * @example
 * // (include JSX pragma at top of file if you're using CSS prop)
 * const MyComponent = () => (
 *   <ul css={verticalStackCss.l}>
 *     <li>Elem 1</li>
 *     <li>Elem 2</li>
 *   </ul>
 * )
 * // ^^ these list items will be stacked with spacing.l space between them
 *
 * @example
 * // you can also nest stacks
 * const MyComponent: React.FC = () => (
 *   <ul css={verticalStackCss.l}>
 *     <li>Elem 1</li>
 *     <li>Elem 2</li>
 *     <div css={verticalStackCss.m}>
 *       <p>Hi</p>
 *       <p>Sup</p>
 *     </div>
 *     <li>Elem 3</li>
 *   </ul>
 * )
 * // ^^ stuff inside the div will be spaced apart with spacing.m, but elements
 * // in the ul are spaced by spacing.l
 */
export const verticalStackCss = mapValues(rawSpacing, (numPx) =>
  css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: `${numPx}px`,
  })
);
