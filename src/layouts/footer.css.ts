import { style } from "@vanilla-extract/css";
import classNames from "classnames";
import { pageSectionCss } from "../styles/page-section.css";
import { spacing } from "../styles/spacing";
import { stackCss } from "../styles/spacing.css";
import { textCss } from "../styles/text.css";

export const footerCss = classNames(
  pageSectionCss,
  style({ paddingBottom: spacing.xxl })
);
export const footerContentCss = classNames(
  style({ maxWidth: "50ch" }),
  stackCss({ gap: "xl" })
);

export const footerCopyrightCss = classNames(
  textCss({ size: "xs", color: "secondary" }),
  style({ fontStyle: "italic" })
);
