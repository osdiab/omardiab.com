import { css } from "@emotion/react";
import { palette } from "src/styles/palette";
import { mapValues } from "src/utility/object";

/**
 * Standard text sizes expressed as number of px
 *
 * Unless necessary for calculations, prefer to use the textSizeCss mixins,
 * since they a) define sizes as rems which respect user preferences
 */
export const numPxTextSizes = {
  xxl: 48,
  xl: 32,
  l: 24,
  m: 20,
  s: 16,
  xs: 14,
  xxs: 12,
};

export const numPxLineHeights: {
  [key in keyof typeof numPxTextSizes]: number;
} = {
  xxl: 56,
  xl: 40,
  l: 32,
  m: 24,
  s: 24,
  xs: 20,
  xxs: 16,
};

/**
 * Text sizes expressed as rems, to respect user text size preferences
 *
 * Standard default text size is 16px, hence dividing by 16.
 */
const remTextSizes = mapValues(numPxTextSizes, (sizePx) => `${sizePx / 16}rem`);

const remLineHeights = mapValues(
  numPxLineHeights,
  (sizePx) => `${sizePx / 16}rem`
);

/**
 * CSS Mixins to apply the proper text size to a given element
 */
export const textSizeCss = mapValues(
  remTextSizes,
  (textSize, key) => css`
    line-height: ${remLineHeights[key]};
    font-size: ${textSize};
  `
);

export const defaultFontFamily = "'Libre Franklin', sans-serif";

export const emphasisCss = css`
  font-weight: 700;
  color: ${palette.primary};
`;
