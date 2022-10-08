import { style } from "@vanilla-extract/css";
import { mediaVariants } from "./media-queries";
import { spacing } from "./spacing";

export const pageSectionCss = style({
  paddingLeft: `${spacing.m}`,
  paddingRight: `${spacing.m}`,
  maxWidth: "1000px",
  width: "100%",
  margin: "0 auto",
  "@media": {
    [mediaVariants.tablet]: {
      paddingLeft: spacing.xxl,
      paddingRight: spacing.xxl,
    },
  },
});
