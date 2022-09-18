import { style } from "@vanilla-extract/css";
import { themeVars } from "./theme.css";

const hoverStyle = {
  color: themeVars.primary.highlight,
};
export const hyperlinkCss = style({
  border: 0,
  margin: 0,
  padding: 0,
  display: "inline",
  background: "none",
  cursor: "pointer",
  color: themeVars.primary.normal,
  textDecoration: "underline",
  ":hover": hoverStyle,
  ":focus": hoverStyle,
});

export const hyperlinkSuffixCss = style({
  marginLeft: "0.25ch",
  verticalAlign: "middle",
});
