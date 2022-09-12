import type { CSS } from "@stitches/react";
import { spacing, stackCss } from "./spacing";

export const compositionCss: CSS = {
  ...stackCss({ flexDirection: "column", gap: spacing.m }),
  maxWidth: "60ch",
};
