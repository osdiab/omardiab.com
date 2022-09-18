import { mapValues } from "../utility/object";

/**
 * Standard text sizes expressed as number of px
 */
export const textSizePx = {
  xxl: { fontSize: 48, lineHeight: 56 },
  xl: { fontSize: 32, lineHeight: 40 },
  l: { fontSize: 24, lineHeight: 32 },
  m: { fontSize: 20, lineHeight: 28 },
  s: { fontSize: 16, lineHeight: 24 },
  xs: { fontSize: 14, lineHeight: 20 },
  xxs: { fontSize: 12, lineHeight: 16 },
};

/**
 * Standard text sizes expressed as CSS objects
 */
export const textSizeObjects = mapValues(textSizePx, (value) =>
  mapValues(value, (size) => `${size}px`)
);

export const fontWeights = { normal: 400, bold: 600 };
