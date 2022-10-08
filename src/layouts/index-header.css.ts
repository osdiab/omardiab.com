import { createTheme, style } from "@vanilla-extract/css";
import { textSizeObjects } from "../styles/text";
import { themeVars } from "../styles/theme.css";
import { calc } from "@vanilla-extract/css-utils";
import { textCss } from "../styles/text.css";

export const [headingTheme, headingVars] = createTheme(textSizeObjects.xxl);
export const headingTextCss = style([headingVars, textCss({ weight: "bold" })]);
export const avatarCss = style({
  height: calc.multiply(headingVars.lineHeight, 3),
  aspectRatio: 1,
  objectFit: "cover",
});
export const nameHighlightCss = style({
  color: themeVars.primary.normal,
  display: "inline-block",
});
