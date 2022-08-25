import { css } from "@stitches/react";
import { hyperlinkRawCss } from "./hyperlink";
import { spacing } from "./spacing";

export const compositionCss = css({
  display: "flex",
  flexDirection: "column",
  gap: spacing.m,
  maxWidth: "60ch",
  "& a": hyperlinkRawCss,
});
