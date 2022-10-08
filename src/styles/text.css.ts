import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { fontWeights, textSizePx } from "./text";
import { themeVars } from "./theme.css";

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
    color: {
      body: themeVars.text.body,
      primary: themeVars.primary.normal,
      secondary: themeVars.text.secondary,
    },
  },
});
