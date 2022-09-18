import { recipe } from "@vanilla-extract/recipes";
import { mapValues } from "../utility/object";
import { spacing } from "./spacing";

/**
 * CSS mixin to use on a parent component to make each of its children display
 * with even spacing, known as a "stack". Defaults to a block (display: flex),
 * vertical (flexDirection: column) stack.
 *
 * @see {@link https://every-layout.dev/layouts/stack/}
 *
 * @example
 * const MyComponent = () => (
 *   <ul css={css(stackCss({{ gap: spacing.m }))()}>
 *     <li>Elem 1</li>
 *     <li>Elem 2</li>
 *   </ul>
 * )
 * // ^^ these list items will be side by side with spacing.m space between them
 */
export const stackCss = recipe({
  base: {},
  variants: {
    display: {
      flex: { display: "flex" },
      inlineFlex: { display: "inline-flex" },
    },
    gap: mapValues(spacing, (gap) => ({ gap })),
    flexDirection: {
      row: { flexDirection: "row" },
      column: { flexDirection: "column" },
    },
    alignItems: {
      center: { alignItems: "center" },
      start: { alignItems: "start" },
      end: { alignItems: "end" },
    },
    justifyContent: {
      center: { justifyContent: "center" },
      start: { justifyContent: "start" },
      end: { justifyContent: "end" },
      spaceBetween: { justifyContent: "space-between" },
      spaceAround: { justifyContent: "space-around" },
    },
  },
  defaultVariants: { display: "flex", flexDirection: "column" },
});
