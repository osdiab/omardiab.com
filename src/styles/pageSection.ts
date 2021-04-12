import { css } from "@emotion/react";
import { cssForMediaSize, MediaSize } from "src/styles/mediaQueries";
import { spacing } from "src/styles/spacing";

export const pageSectionCss = css`
  padding: ${spacing.l} ${spacing.xxl};
  max-width: 1000px;
  margin: 0 auto;

  ${cssForMediaSize({
    max: MediaSize.PHONE_LARGE,
    css: css`
      padding: ${spacing.m};
    `,
  })}
`;
