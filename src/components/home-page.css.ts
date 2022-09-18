import { style } from "@vanilla-extract/css";
import { pageSectionCss } from "../styles/page-section.css";
import { stackCss } from "../styles/spacing.css";

export const sectionCss = style([pageSectionCss, stackCss({ gap: "m" })]);
export const headingTextCss = style({ maxWidth: "40ch" });
