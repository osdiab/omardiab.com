import { mapValues } from "../utility/object";

/**
 * Standard spacing values expressed as number of pixels
 */
export const rawSpacing = {
  xxxxl: 80,
  xxxl: 64,
  xxl: 40,
  xl: 32,
  l: 24,
  m: 16,
  s: 12,
  xs: 8,
  xxs: 4,
  xxxs: 2,
};

/**
 * Standard spacing values expressed as pixel CSS strings
 */
export const spacing = mapValues(rawSpacing, (numPx) => `${numPx}px`);
