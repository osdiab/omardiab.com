import { style } from "@vanilla-extract/css";
import { palette } from "./palette";

const hoverStyle = {
  color: palette.primaryHighlight,
};
export const hyperlinkCss = style({
  color: palette.primary,
  textDecoration: "underline",
  ":hover": hoverStyle,
  ":focus": hoverStyle,
});

export const hyperlinkSuffixCss = style({
  marginLeft: "0.25ch",
  verticalAlign: "middle",
});
