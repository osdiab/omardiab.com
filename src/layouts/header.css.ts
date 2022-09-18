import { style } from "@vanilla-extract/css";
import { themeVars } from "../styles/theme.css";

export const avatarCss = style({
  width: "150px",
  height: "150px",
  objectFit: "cover",
});
export const nameHighlightCss = style({
  color: themeVars.primary.normal,
  display: "inline-block",
});
