import { CSS, css } from "@stitches/react";
import { palette } from "./palette";

export const hyperlinkRawCss: CSS = {
  color: palette.primary,
  textDecoration: "underline",
  "&:hover,&:focus": {
    color: palette.primaryHighlight,
  },
};
export const hyperlinkCss = css(hyperlinkRawCss);
