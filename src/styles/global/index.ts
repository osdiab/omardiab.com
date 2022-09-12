import { globalCss } from "@stitches/react";
import { palette } from "../palette";
import { boldCss } from "../text";

export const appStyles = globalCss({
  "html, body": {
    fontFamily:
      "-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif",
    minHeight: "100vh",
    color: palette.bodyText,
    background: palette.background,
  },
  "*": { margin: 0, padding: 0 },
  b: boldCss,
});
