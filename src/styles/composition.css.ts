import { stackCss } from "./spacing.css";
import { style } from "@vanilla-extract/css";

export const compositionCss = style([
  stackCss({ flexDirection: "column", gap: "m" }),
  { maxWidth: "60ch" },
]);
