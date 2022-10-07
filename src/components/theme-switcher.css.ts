import { style } from "@vanilla-extract/css";
import { spacing } from "../styles/spacing";
import { textSizeObjects } from "../styles/text";
import { textCss } from "../styles/text.css";
import { themeVars } from "../styles/theme.css";

export const switcherCss = style([
  {
    position: "fixed",
    left: spacing.m,
    bottom: spacing.m,
  },
]);
export const switcherButtonCss = style({
  borderRadius: "100%",
  background: themeVars.background,
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: themeVars.border.light,
  lineHeight: "1em",
  padding: spacing.xs,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
export const switcherIconCss = style([
  textCss({ size: "l" }),
  {
    display: "block",
    lineHeight: 0,
    width: textSizeObjects.l.fontSize,
    height: textSizeObjects.l.fontSize,
  },
]);
