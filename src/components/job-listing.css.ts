import { style } from "@vanilla-extract/css";
import { mediaVariants } from "../styles/media-queries";
import { palette } from "../styles/palette";
import { spacing } from "../styles/spacing";
import { stackCss } from "../styles/spacing.css";
import { fontWeightCss, textSizeCss } from "../styles/text.css";

export const companyNameCss = style([textSizeCss.m, fontWeightCss.bold]);
export const metadataCss = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: spacing.xs,
});
export const metadataItemCss = style([
  stackCss({ gap: "xxs" }),
  { color: palette.secondaryText },
]);

export const jobListCss = style({
  display: "grid",
  gap: spacing.l,
  gridTemplateColumns: "1fr",
  justifyContent: "center",
  alignItems: "start",
  listStyleType: "none",
  "@media": {
    [mediaVariants.tablet]: {
      gap: `${spacing.xxl} ${spacing.xl}`,
      gridTemplateColumns: "1fr 1fr",
    },
  },
});
export const jobListItemCss = style({
  minWidth: "250px",
  width: "100%",
  maxWidth: "450px",
});
