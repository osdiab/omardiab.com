import type { CSS } from "@stitches/react";
import { palette } from "./palette";

export const hyperlinkCss: CSS = {
  color: palette.primary,
  textDecoration: "underline",
  "&:hover,&:focus": {
    color: palette.primaryHighlight,
  },
};
