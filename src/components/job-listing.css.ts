import { style } from "@vanilla-extract/css";
import { mediaVariants } from "../styles/media-queries";
import { spacing } from "../styles/spacing";
import { stackCss } from "../styles/spacing.css";
import { themeVars } from "../styles/theme.css";

export const metadataCss = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: spacing.xs,
});
export const metadataItemCss = style([
  stackCss({ gap: "xxs" }),
  { color: themeVars.text.secondary },
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
