import { style } from "@vanilla-extract/css";
import { palette } from "../styles/palette";

export const avatarCss = style({
  width: "150px",
  height: "150px",
  objectFit: "cover",
});
export const nameHighlightCss = style({
  color: palette.primary,
  display: "inline-block",
});
