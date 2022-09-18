import { style } from "@vanilla-extract/css";
import { spacing } from "../styles/spacing";
import { textSizeObjects } from "../styles/text";
import { textCss } from "../styles/text.css";
import { themeVars } from "../styles/theme.css";

export const switcherCss = style([
  {
    borderRadius: "100%",
    background: themeVars.background,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: themeVars.border.light,
    position: "fixed",
    left: spacing.m,
    bottom: spacing.m,
    padding: spacing.xs,
    lineHeight: "1em",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
]);
export const switcherButtonCss = style({
  display: "block",
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
