import { css } from "@emotion/react";
import { mediaQueries } from "src/styles/mediaQueries";

const textBlockCss = css`
  :not(:last-child) {
    margin-bottom: 1.2rem;
  }
`;

const boldCss = css`
  font-weight: 700;
`;

export const globalTextStyles = css`
  p {
    font-size: 1.2rem;
    line-height: 1.5;
  }
  h1 {
    font-size: 5rem;
    @media (max-width: ${mediaQueries.sizes.phoneLarge}) {
      font-size: 3.5rem;
    }

    ${boldCss};
  }

  h2 {
    font-size: 3.5rem;
    @media (max-width: ${mediaQueries.sizes.phoneLarge}) {
      font-size: 2.5rem;
    }
    ${boldCss};
  }

  h3 {
    font-size: 2.5rem;
    @media (max-width: ${mediaQueries.sizes.phoneLarge}) {
      font-size: 2rem;
    }
    ${boldCss};
  }

  h4 {
    font-size: 2rem;
    @media (max-width: ${mediaQueries.sizes.phoneLarge}) {
      font-size: 1.6rem;
    }
    ${boldCss};
  }

  h5 {
    font-size: 1.4rem;
    ${boldCss};
  }

  h6 {
    font-size: 1.4rem;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${textBlockCss};
  }
`;
