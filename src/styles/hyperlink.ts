import { CSS, css } from "@stitches/react";
import { palette } from "./palette";

export const hyperlinkRawCss: CSS = {
  color: palette.primary,
  textDecoration: "underline",
};
export const hyperlinkCss = css(hyperlinkRawCss);
