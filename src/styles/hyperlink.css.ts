import { style } from "@vanilla-extract/css";
import { palette } from "./palette";
import { stackCss } from "./spacing.css";

const hoverStyle = {
  color: palette.primaryHighlight,
};
export const hyperlinkCss = style({
  color: palette.primary,
  textDecoration: "underline",
  ":hover": hoverStyle,
  ":focus": hoverStyle,
});

export const hyperlinkSpacingCss = style([
  stackCss({
    flexDirection: "row",
    display: "inlineFlex",
    alignItems: "center",
  }),
  { gap: "0.25ch" },
]);
