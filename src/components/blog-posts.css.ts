import { style } from "@vanilla-extract/css";
import classNames from "classnames";
import { stackCss } from "../styles/spacing.css";
import { textCss } from "../styles/text.css";
import { themeVars } from "../styles/theme.css";

export const postListCss = classNames(
  style({ listStyle: "none" }),
  stackCss({ gap: "xxl" })
);
export const postPreviewCss = classNames(
  style({
    position: "relative",
  }),
  stackCss({ gap: "m" })
);

export const viewPostLinkCss = style({
  position: "absolute",
  opacity: 0,
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
});

export const postMetadataCss = classNames(
  stackCss({ gap: "m", flexDirection: "row" })
);

export const postTimestampCss = classNames(
  textCss({ size: "xs" }),
  style({ color: themeVars.text.secondary, fontStyle: "italic" })
);

export const postReadMoreCss = style({ marginLeft: "auto" });
