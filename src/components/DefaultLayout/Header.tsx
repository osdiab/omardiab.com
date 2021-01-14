import * as React from "react";

import avatarImg from "src/assets/avatar.jpg";
import { pageSectionCss } from "src/styles/pageSection";
import { css } from "@emotion/react";
import { palette } from "src/styles/palette";

const headerCss = [
  pageSectionCss,
  css`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 0;
    border: 0;
  `,
];
const avatarCss = css`
  max-width: 140px;
  min-height: 140px;
  flex: 1;
  align-self: stretch;

  background-image: url(${avatarImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  margin-right: 20px;
`;

const bannerTitleCss = css`
  margin: 0;
  flex: 1;
`;
const highlightNameCss = css`
  color: ${palette.primary};
  display: inline-block;
`;

export const Header = (): JSX.Element => (
  <header css={headerCss}>
    <div css={avatarCss} role="img" aria-label="Portrait of Omar Diab" />

    <h1 css={bannerTitleCss}>
      I am <b css={highlightNameCss}>Omar Diab.</b>
    </h1>
  </header>
);
