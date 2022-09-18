import { style } from "@vanilla-extract/css";
import { themeVars } from "./theme.css";

const hoverStyle = {
  color: themeVars.primary.highlight,
};
export const hyperlinkCss = style({
  color: themeVars.primary.normal,
  textDecoration: "underline",
  ":hover": hoverStyle,
  ":focus": hoverStyle,
});

export const hyperlinkSuffixCss = style({
  marginLeft: "0.25ch",
  verticalAlign: "middle",
});
