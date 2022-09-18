import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { fontWeights, textSizePx } from "./text";

const textSizeCss = styleVariants(textSizePx, ({ fontSize, lineHeight }) => ({
  lineHeight: `${lineHeight}px`,
  fontSize: `${fontSize}px`,
}));

const fontWeightCss = styleVariants(fontWeights, (fontWeight) => ({
  fontWeight,
}));

export const textCss = recipe({
  variants: {
    size: textSizeCss,
    weight: fontWeightCss,
    textAlign: { start: "start", center: "center", end: "end" },
  },
});
