import * as React from "react";
import Img from "react-optimized-image";

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
  position: relative;
  align-self: stretch;
  min-width: 140px;
  min-height: 140px;
  margin-right: 20px;
  overflow: hidden;
  display: flex;
  justify-content: center;

  > img {
    position: absolute;
    top: 0;
    height: 100%;
  }
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
    <div css={avatarCss}>
      <Img src={avatarImg} alt="Portrait of Omar Diab" />
    </div>

    <h1 css={bannerTitleCss}>
      I am <b css={highlightNameCss}>Omar Diab.</b>
    </h1>
  </header>
);
