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
    align-items: stretch;
  `,
];
const avatarCss = css`
  flex: 1;
  object-fit: cover;
  max-width: 140px;
  min-height: 140px;
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
    <img src={avatarImg} css={avatarCss} alt="Portrait of Omar Diab" />

    <h1 css={bannerTitleCss}>
      I am <b css={highlightNameCss}>Omar Diab.</b>
    </h1>
  </header>
);
