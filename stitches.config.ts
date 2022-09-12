import { createStitches } from "@stitches/react";

export const { css, globalCss, getCssText } = createStitches({
  media: {
    tablet: "(min-width: 600px)",
    desktopS: "(min-width: 900px)",
    desktopL: "(min-width: 1200px)",
  },
});
