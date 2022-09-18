import { style } from "@vanilla-extract/css";
import { spacing } from "./spacing";

export const pageSectionCss = style({
  padding: `${spacing.l} ${spacing.xxl}`,
  maxWidth: "1000px",
  width: "100%",
  margin: "0 auto",
});
