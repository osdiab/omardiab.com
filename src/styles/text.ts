import { css } from "@emotion/core";
import { palette } from "src/styles/palette";

export const text = {
  fontFamily: "'Libre Franklin', serif",
  size: {
    paragraph: "1.2rem",
  },
};

const boldCss = css`
  font-weight: 700;
`;

export const emphasisCss = [
  boldCss,
  css`
    color: ${palette.primary};
  `,
];
