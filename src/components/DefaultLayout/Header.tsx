import * as React from "react";
import Image from "next/image";

import avatarImg from "src/assets/avatar.jpg";
import { pageSectionCss } from "src/styles/pageSection";
import { css } from "@emotion/react";
import { palette } from "src/styles/palette";
import { textSizeCss } from "src/styles/text";

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

  img {
    height: 100%;
    width: auto;
  }
`;

const bannerTitleCss = [
  css`
    margin: 0;
    flex: 1;
  `,
  textSizeCss.xxl,
];
const highlightNameCss = css`
  color: ${palette.primary};
  display: inline-block;
`;

export const Header = (): JSX.Element => (
  <header css={headerCss}>
    <div css={avatarCss}>
      <Image
        src={avatarImg}
        alt="Portrait of Omar Diab"
        layout="fill"
        objectFit="contain"
      />
    </div>

    <h1 css={bannerTitleCss}>
      I am <b css={highlightNameCss}>Omar Diab</b>
    </h1>
  </header>
);
