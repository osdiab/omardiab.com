import { style } from "@vanilla-extract/css";
import classNames from "classnames";
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

const hyperlinkDecorationCss = style({ verticalAlign: "middle" });

export const hyperlinkPrefixCss = classNames(
  style({ marginRight: "0.25ch" }),
  hyperlinkDecorationCss
);

export const hyperlinkSuffixCss = classNames(
  style({ marginLeft: "0.25ch" }),
  hyperlinkDecorationCss
);
