import { style } from "@vanilla-extract/css";
import classNames from "classnames";
import { stackCss } from "../styles/spacing.css";
import { textCss } from "../styles/text.css";
import { themeVars } from "../styles/theme.css";

export const headerCss = style({
  position: "sticky",
  top: 0,
  borderBottom: "1px solid",
  borderBottomColor: themeVars.border.light,
  background: themeVars.background,
  zIndex: 100,
});

export const headerNavCss = classNames(
  textCss({ size: "xs" }),
  stackCss({ gap: "s", flexDirection: "row", flexWrap: "wrap" }),
  style({ marginLeft: "auto" })
);

const hoverCss = { color: themeVars.primary.normal };
export const headerTitleCss = classNames(
  textCss({ size: "l", weight: "bold" }),
  style({
    textDecoration: "none",
    whiteSpace: "nowrap",
    color: themeVars.text.body,
    ":hover": hoverCss,
    ":focus": hoverCss,
  })
);
