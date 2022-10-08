import { style } from "@vanilla-extract/css";
import { spacing } from "../styles/spacing";
import { themeVars } from "../styles/theme.css";

export const cardCss = style({
  borderWidth: "1px",
  borderRadius: "4px",
  borderStyle: "solid",
  borderColor: themeVars.border.light,
  padding: spacing.m,
});
